import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '../../lib/utils';
import { ButtonProps } from '../../types';

interface MotionButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: ButtonProps['variant'];
  size?: ButtonProps['size'];
  children: React.ReactNode;
}

const Button: React.FC<MotionButtonProps> = ({
  className,
  variant = 'primary',
  size = 'md',
  children,
  ...props
}) => {
  const variants = {
    primary: 'bg-[var(--primary-color)] text-white hover:bg-[var(--primary-hover)] shadow-md hover:shadow-lg',
    secondary: 'bg-[var(--secondary-color)] text-white hover:bg-[var(--secondary-hover)] shadow-md hover:shadow-lg',
    outline: 'border-2 border-[var(--primary-color)] text-[var(--primary-color)] hover:bg-[var(--primary-color)]/10',
    ghost: 'text-[var(--primary-color)] hover:bg-[var(--primary-color)]/5',
  };

  const sizes = {
    sm: 'px-4 py-1.5 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3.5 text-lg font-semibold',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        'rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
