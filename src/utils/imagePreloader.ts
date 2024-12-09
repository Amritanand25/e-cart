import { productImages } from './productData';

class ImagePreloader {
  private cache: Map<string, Promise<void>> = new Map();

  constructor() {
    this.preloadInitialImages();
  }

  private preloadInitialImages(): void {
    productImages.forEach(url => {
      ['mobile', 'tablet', 'desktop'].forEach(device => {
        const optimizedUrl = this.getOptimizedImageUrl(url, device as 'mobile' | 'tablet' | 'desktop');
        this.preloadImage(optimizedUrl);
      });
    });
  }

  private getOptimizedImageUrl(url: string, deviceType: 'mobile' | 'tablet' | 'desktop'): string {
    const widths = {
      mobile: '400',
      tablet: '800',
      desktop: '1200'
    };
    return url.replace(/w=\d+/, `w=${widths[deviceType]}`);
  }

  private preloadImage(url: string): Promise<void> {
    if (!this.cache.has(url)) {
      const promise = new Promise<void>((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = () => resolve();
        img.onerror = reject;
      });
      this.cache.set(url, promise);
    }
    return this.cache.get(url)!;
  }

  public isImageCached(url: string): boolean {
    return this.cache.has(url);
  }

  public async loadImage(url: string): Promise<void> {
    return this.preloadImage(url);
  }
}

export const imagePreloader = new ImagePreloader();