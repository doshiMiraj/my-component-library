import {ReactNode, HTMLAttributes} from 'react';

export type ModalSize = 'small' | 'medium' | 'large' | 'full';

export interface ModalProps {
  /**
   * Controls whether the modal is visible
   */
  isOpen: boolean;
  
  /**
   * Callback fired when the modal requests to be closed
   */
  onClose: () => void;
  
  /**
   * The size of the modal
   * @default 'medium'
   */
  size?: ModalSize;
  
  /**
   * If true, clicking the backdrop will close the modal
   * @default true
   */
  closeOnBackdropClick?: boolean;
  
  /**
   * If true, pressing Escape will close the modal
   * @default true
   */
  closeOnEscape?: boolean;
  
  /**
   * If true, shows a close button in the header
   * @default true
   */
  showCloseButton?: boolean;
  
  /**
   * The content to be rendered inside the modal
   */
  children: ReactNode;
  
  /**
   * Additional CSS classes for the modal content
   */
  className?: string;
}

export interface ModalHeaderProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The content to be rendered inside the modal header
   */
  children: ReactNode;
  
  /**
   * Additional CSS classes
   */
  className?: string;
}

export interface ModalBodyProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The content to be rendered inside the modal body
   */
  children: ReactNode;
  
  /**
   * Additional CSS classes
   */
  className?: string;
}

export interface ModalFooterProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The content to be rendered inside the modal footer
   */
  children: ReactNode;
  
  /**
   * Additional CSS classes
   */
  className?: string;
}
