import { ReactNode } from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

export interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  buttonText: string;
  onButtonClick?: () => void;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
}

export interface ProductCardProps {
  product: Product;
}

export interface Testimonial {
  id: string;
  image: string;
  name: string;
  city: string;
  text: string;
}

export interface TestimonialProps {
  testimonial: Testimonial;
}
