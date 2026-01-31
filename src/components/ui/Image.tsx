import { useState, useEffect } from 'react';
import { cn } from '../../lib/utils';
import { FALLBACK_IMAGE } from '../../utils/constants';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  containerClassName?: string;
}

const Image: React.FC<ImageProps> = ({ 
  src, 
  alt, 
  className,
  containerClassName,
  fallbackSrc = FALLBACK_IMAGE,
  ...props 
}) => {
  const [imgSrc, setImgSrc] = useState<string>(src || fallbackSrc);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setImgSrc(src || fallbackSrc);
    setHasError(false);
    setIsLoading(true);
  }, [src, fallbackSrc]);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc(fallbackSrc);
    }
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className={cn("relative overflow-hidden", containerClassName)}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <span className="sr-only">Cargando imagen...</span>
        </div>
      )}
      <img
        src={imgSrc}
        alt={alt}
        className={cn(
          "w-full h-full object-cover transition-opacity duration-300",
          isLoading ? "opacity-0" : "opacity-100",
          className
        )}
        onError={handleError}
        onLoad={handleLoad}
        loading="lazy"
        {...props}
      />
    </div>
  );
};

export default Image;
