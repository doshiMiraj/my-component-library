import {ReactNode, HTMLAttributes} from 'react';

export type CardVariant = 'default' | 'elevated' | 'outlined';
export type CardPadding = 'none' | 'small' | 'medium' | 'large';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * The variant style of the card
     * @default 'default'
     */
    variant?: CardVariant;

    /**
     * Padding inside the card
     * @default 'medium'
     */
    padding?: CardPadding;

    /**
     * If true, card will have a hover effect
     * @default false
     */
    hoverable?: boolean;

    /**
     * If true, card will be clickable with pointer cursor
     * @default false
     */
    clickable?: boolean;

    /**
     * The content to be rendered inside the card
     */
    children: ReactNode;

    /**
     * Additional CSS classes
     */
    className?: string;
}

export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * The content to be rendered inside the card header
     */
    children: ReactNode;

    /**
     * Additional CSS classes
     */
    className?: string;
}

export interface CardBodyProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * The content to be rendered inside the card body
     */
    children: ReactNode;

    /**
     * Additional CSS classes
     */
    className?: string;
}

export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * The content to be rendered inside the card body
     */
    children: ReactNode;

    /**
     * Additional CSS classes
     */
    className?: string;
}