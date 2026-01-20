export type LoaderVariant = 'spinner' | 'dots' | 'pulse' | 'bars' | 'ring';
export type LoaderSize = 'small' | 'medium' | 'large';
export type LoaderColor = 'primary' | 'secondary' | 'success' | 'danger' | 'white';

export interface LoaderProps {
  /**
   * The variant style of the loader
   * @default 'spinner'
   */
  variant?: LoaderVariant;
  
  /**
   * The size of the loader
   * @default 'medium'
   */
  size?: LoaderSize;
  
  /**
   * The color of the loader
   * @default 'primary'
   */
  color?: LoaderColor;
  
  /**
   * Loading text displayed below the loader
   */
  text?: string;
  
  /**
   * If true, shows a full-screen overlay with the loader
   * @default false
   */
  overlay?: boolean;
  
  /**
   * Custom color (CSS color value)
   */
  customColor?: string;
  
  /**
   * Additional CSS classes
   */
  className?: string;
}