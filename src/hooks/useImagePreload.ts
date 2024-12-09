import { useState, useEffect } from 'react';
import { imagePreloader } from '../utils/imagePreloader';
import { useDeviceType } from '../utils/deviceDetection';

export const useImagePreload = (imageUrl: string) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const deviceType = useDeviceType();

  const getOptimizedImageUrl = (url: string) => {
    const widths = {
      mobile: '400',
      tablet: '800',
      desktop: '1200'
    };
    return url.replace(/w=\d+/, `w=${widths[deviceType]}`);
  };

  const optimizedUrl = getOptimizedImageUrl(imageUrl);

  useEffect(() => {
    let mounted = true;

    const loadImage = async () => {
      if (imagePreloader.isImageCached(optimizedUrl)) {
        setIsLoaded(true);
        return;
      }

      try {
        await imagePreloader.loadImage(optimizedUrl);
        if (mounted) {
          setIsLoaded(true);
        }
      } catch (error) {
        console.error('Failed to load image:', error);
      }
    };

    loadImage();

    return () => {
      mounted = false;
    };
  }, [optimizedUrl]);

  return { isLoaded, optimizedUrl };
};