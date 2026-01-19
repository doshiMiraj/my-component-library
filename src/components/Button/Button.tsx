import React from "react";
import {ButtonProps} from './Button.types';
import styles from './Button.module.css';

const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'medium',
    fullWidth = false,
    disabled = false,
    loading = false,
    children, 
    className = '',
    ...rest
}) => {
    const buttonClasses = [
        styles.button,
        styles[`button--${variant}`],
        styles[`button--${size}`],
        fullWidth ? styles['button--fullWidth'] : '',
        loading ? styles['button--loading'] : '',
        className
    ]
    .filter(Boolean)
    .join(' ');

    return (
        <button className={buttonClasses} disabled={disabled || loading} {...rest}>
            {loading && (
                <span className={styles.spinner}>
                    <svg className={styles.spinnerSvg} viewBox="0 0 24 24">
                        <circle className={styles.spinnerCircle} cx="12" cy="12" r="10" fill="none" strokeWidth="3"/>
                    </svg>
                </span>
            )}
            <span className={loading ? styles.buttonContent : ''}>
                {children}
            </span>
        </button>
    );
};

export default Button;