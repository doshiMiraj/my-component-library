import React from "react";
import { LoaderProps } from "./Loader.types";
import styles from "./Loader.module.css";

const Loader: React.FC<LoaderProps> = ({
  variant = "spinner",
  size = "medium",
  color = "primary",
  text,
  overlay = false,
  customColor,
  className = "",
}) => {
  const loaderClasses = [
    styles.loader,
    styles[`loader--${size}`],
    customColor ? "" : styles[`loader--${color}`],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const renderLoader = () => {
    const loaderStyle = customColor ? { color: customColor } : {};

    switch (variant) {
      case "spinner":
        return (
          <div className={loaderClasses} style={loaderStyle}>
            <svg className={styles.spinner} viewBox="0 0 50 50">
              <circle
                className={styles.spinnerCircle}
                cx="25"
                cy="25"
                r="20"
                fill="none"
                strokeWidth="4"
              />
            </svg>
          </div>
        );

      case "dots":
        return (
          <div className={loaderClasses} style={loaderStyle}>
            <div className={styles.dots}>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
            </div>
          </div>
        );

      case "pulse":
        return (
          <div className={loaderClasses} style={loaderStyle}>
            <div className={styles.pulse}></div>
          </div>
        );

      case "bars":
        return (
          <div className={loaderClasses} style={loaderStyle}>
            <div className={styles.bars}>
              <div className={styles.bar}></div>
              <div className={styles.bar}></div>
              <div className={styles.bar}></div>
              <div className={styles.bar}></div>
            </div>
          </div>
        );

      case "ring":
        return (
          <div className={loaderClasses} style={loaderStyle}>
            <div className={styles.ring}></div>
          </div>
        );

      default:
        return null;
    }
  };

  const loaderContent = (
    <div className={styles.loaderContainer}>
      {renderLoader()}
      {text && <p className={styles.loaderText}>{text}</p>}
    </div>
  );

  if (overlay) {
    return <div className={styles.loaderOverlay}>{loaderContent}</div>;
  }

  return loaderContent;
};

export default Loader;
