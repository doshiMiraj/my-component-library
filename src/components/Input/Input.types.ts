import { InputHTMLAttributes, ChangeEvent } from "react";

export type InputSize = 'small' | 'medium' | 'large';
export type InputStatus = 'default' | 'error' | 'success';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    /**
     * The size of the input
     * @default 'medium'
     */
    size?: InputSize;

    /**
     * The validation status of the input
     * @default 'default'
     */
    status?: InputStatus;

    /**
     * Label text for the input
     */
    label?: string;

    /**
     * Helper text displayed below the input
     */
    helperText?: string;

    /**
     * Error message displayed when status is 'error'
     */
    error?: string;

    /**
     * If true, the input will take full width of its container
     * @default false
     */
    fullWidth?: boolean;

    /**
     * If true, the input will be displayed
     * @default false
     */
    disabled?: boolean;

    /**
     * If true, the input is required
     * @default false
     */
    required?: boolean;

    /**
     * Additional CSS classes for the container
     */
    className?: string;

    /**
     * Additional CSS classes for the input element
     */
    inputClassName?: string;

    /**
     * Callback fired when the value changes
     */
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}