// Analytics and performance tracking utilities

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

// Google Analytics
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// E-commerce tracking
export const trackPurchase = (transactionId: string, value: number, items: any[]) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'purchase', {
      transaction_id: transactionId,
      value: value,
      currency: 'USD',
      items: items,
    });
  }
};

export const trackAddToCart = (itemId: string, itemName: string, price: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'add_to_cart', {
      currency: 'USD',
      value: price,
      items: [
        {
          item_id: itemId,
          item_name: itemName,
          price: price,
          quantity: 1,
        },
      ],
    });
  }
};

export const trackViewItem = (itemId: string, itemName: string, category: string, price: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'view_item', {
      currency: 'USD',
      value: price,
      items: [
        {
          item_id: itemId,
          item_name: itemName,
          category: category,
          price: price,
          quantity: 1,
        },
      ],
    });
  }
};

// Performance monitoring
export const measureWebVitals = (metric: any) => {
  // You can integrate with services like Vercel Analytics, Google Analytics, etc.
  console.log('Web Vital:', metric);
  
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', metric.name, {
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      event_category: 'Web Vitals',
      event_label: metric.id,
      non_interaction: true,
    });
  }
};

// User behavior tracking
export const trackUserAction = (action: string, element: string, page?: string) => {
  event({
    action,
    category: 'User Interaction',
    label: `${element}${page ? ` - ${page}` : ''}`,
  });
};

// Error tracking
export const trackError = (error: string, component?: string) => {
  event({
    action: 'error',
    category: 'Error',
    label: `${error}${component ? ` - ${component}` : ''}`,
  });
};

export default {
  pageview,
  event,
  trackPurchase,
  trackAddToCart,
  trackViewItem,
  measureWebVitals,
  trackUserAction,
  trackError,
};
