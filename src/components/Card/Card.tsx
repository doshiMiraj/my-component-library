import React from "react";
import { CardProps, CardHeaderProps, CardBodyProps, CardFooterProps } from "./Card.types";
import styles from './Card.module.css';

// Main Card Component
const Card: React.FC<CardProps> & {
    Header: React.FC<CardHeaderProps>;
    Body: React.FC<CardBodyProps>;
    Footer: React.FC<CardFooterProps>;
} = ({
    variant = 'default',
    padding = 'medium',
    hoverable = 'false',
    clickable = false,
    children,
    className = '',
    ...rest
}) => {
    const cardClasses = [
        styles.card,
        styles[`card--${variant}`],
        styles[`card--padding-${padding}`],
        hoverable ? styles['card--hoverable'] : '',
        clickable ? styles['card--clickable'] : '',
        className,
    ]
    .filter(Boolean)
    .join(' ');

    return (
        <div className={cardClasses} {...rest}>
            {children}
        </div>
    );
};

// Card Header Subcomponent
const CardHeader: React.FC<CardHeaderProps> = ({
    children,
    className = '',
    ...rest
}) => {
    const headerClasses = [styles.cardHeader, className].filter(Boolean).join(' ');

    return (
        <div className={headerClasses} {...rest}>
            {children}
        </div>
    );
};

// Card Body Subcomponent
const CardBody: React.FC<CardBodyProps> = ({
    children,
    className = '',
    ...rest
}) => {
    const bodyClasses = [styles.cardBody, className].filter(Boolean).join(' ');

    return (
        <div className={bodyClasses} {...rest}>
            {children}
        </div>
    );
};

// Card Footer Subcomponent
const CardFooter: React.FC<CardFooterProps> = ({
    children,
    className = '',
    ...rest
}) => {
    const footerClasses = [styles.cardFooter, className].filter(Boolean).join(' ');

    return (
        <div className={footerClasses} {...rest}>
            {children}
        </div>
    );
};

// Attach subcomponents to Card
Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;