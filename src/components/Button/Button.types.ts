import {ReactNode, ButtonHTMLAttributes} from 'react';
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * The variant style of the button
     * @default 'primary'
     */
    variant?: ButtonVariant;

    /**
     * The size of the button
     * @default 'medium'
     */
    size?: ButtonSize;

    /**
     * If true, the button will take full width of its container
     * @default false
     */
    fullWidth?: boolean;

    /**
     * If true, the button will be disabled
     * @default false
     */
    disabled?: boolean;

    /**
     * If true, the button will show a loading spinner
     * @default false 
     */
    loading?: boolean;

    /**
     * The content to be rendered inside the button
     */
    children: ReactNode;

    /**
     * Additional CSS classes
     */
    className?: string;
};