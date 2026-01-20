import { forwardRef } from "react";
import { InputProps } from "./Input.types";
import styles from "./Input.module.css";

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size = "medium",
      status = "default",
      label,
      helperText,
      error,
      fullWidth = false,
      disabled = false,
      required = false,
      className = "",
      inputClassName = "",
      type = "text",
      ...rest
    },
    ref,
  ) => {
    // Determine the actual status based on error prop
    const actualStatus = error ? "error" : status;

    const containerClasses = [
      styles.inputContainer,
      fullWidth ? styles["inputContainer--fullWidth"] : "",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    const inputClasses = [
      styles.input,
      styles[`input--${size}`],
      styles[`input--${actualStatus}`],
      disabled ? styles["input--disabled"] : "",
      inputClassName,
    ]
      .filter(Boolean)
      .join(" ");

    const labelClasses = [
      styles.label,
      required ? styles["label--required"] : "",
      disabled ? styles["label--disabled"] : "",
    ]
      .filter(Boolean)
      .join(" ");

    const helperClasses = [
      styles.helperText,
      styles[`helperText--${actualStatus}`],
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div className={containerClasses}>
        {label && (
          <label className={labelClasses}>
            {label}
            {required && <span className={styles.required}>*</span>}
          </label>
        )}
        <input
          ref={ref}
          type={type}
          className={inputClasses}
          disabled={disabled}
          required={required}
          {...rest}
        />
        {(helperText || error) && (
          <span className={helperClasses}>{error || helperText}</span>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;
