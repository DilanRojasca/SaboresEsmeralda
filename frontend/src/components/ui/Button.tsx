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
    primary: 'bg-emerald-500 text-white hover:bg-emerald-400 shadow-md hover:shadow-lg',
    secondary: 'bg-coffee-800 text-white hover:bg-coffee-600 shadow-md hover:shadow-lg',
    outline: 'border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-50',
    ghost: 'text-emerald-500 hover:bg-emerald-50/50',
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
