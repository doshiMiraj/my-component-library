import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import {
  ModalProps,
  ModalHeaderProps,
  ModalBodyProps,
  ModalFooterProps,
} from "./Modal.types";
import styles from "./Modal.module.css";

// Main Modal Component
const Modal: React.FC<ModalProps> & {
  Header: React.FC<ModalHeaderProps>;
  Body: React.FC<ModalBodyProps>;
  Footer: React.FC<ModalFooterProps>;
} = ({
  isOpen,
  onClose,
  size = "medium",
  closeOnBackdropClick = true,
  closeOnEscape = true,
  showCloseButton = true,
  children,
  className = "",
}) => {
  // Handle escape key
  useEffect(() => {
    if (!isOpen || !closeOnEscape) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, closeOnEscape, onClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (closeOnBackdropClick && e.target === e.currentTarget) {
      onClose();
    }
  };

  const modalClasses = [
    styles.modalContent,
    styles[`modalContent--${size}`],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const modalElement = (
    <div className={styles.modalOverlay} onClick={handleBackdropClick}>
      <div className={modalClasses}>
        {showCloseButton && (
          <button
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close modal"
          >
            ×
          </button>
        )}
        {children}
      </div>
    </div>
  );

  // Render modal in a portal (outside the parent DOM)
  return createPortal(modalElement, document.body);
};

// Modal Header Subcomponent
const ModalHeader: React.FC<ModalHeaderProps> = ({
  children,
  className = "",
  ...rest
}) => {
  const headerClasses = [styles.modalHeader, className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={headerClasses} {...rest}>
      {children}
    </div>
  );
};

// Modal Body Subcomponent
const ModalBody: React.FC<ModalBodyProps> = ({
  children,
  className = "",
  ...rest
}) => {
  const bodyClasses = [styles.modalBody, className].filter(Boolean).join(" ");

  return (
    <div className={bodyClasses} {...rest}>
      {children}
    </div>
  );
};

// Modal Footer Subcomponent
const ModalFooter: React.FC<ModalFooterProps> = ({
  children,
  className = "",
  ...rest
}) => {
  const footerClasses = [styles.modalFooter, className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={footerClasses} {...rest}>
      {children}
    </div>
  );
};

// Attach subcomponents to Modal
Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;
