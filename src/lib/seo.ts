import { Metadata } from 'next';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
}

export function generateSEO({
  title = 'Stitches - Premium Clothing Brand',
  description = 'Elevate your style with premium, sustainable clothing. Discover timeless designs and luxury fabrics at Stitches.',
  keywords = ['premium clothing', 'luxury fashion', 'sustainable fashion', 'designer clothes', 'high-end fashion'],
  ogImage = '/og-image.jpg',
  canonicalUrl,
  noIndex = false
}: SEOProps = {}): Metadata {
  return {
    title,
    description,
    keywords: keywords.join(', '),
    authors: [{ name: 'Stitches Team' }],
    creator: 'Stitches',
    publisher: 'Stitches',
    robots: noIndex ? 'noindex,nofollow' : 'index,follow',
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: 'Stitches',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
      creator: '@stitches_brand',
    },
    viewport: 'width=device-width, initial-scale=1',
    themeColor: '#000000',
    manifest: '/manifest.json',
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon-16x16.png',
      apple: '/apple-touch-icon.png',
    },
    ...(canonicalUrl && {
      alternates: {
        canonical: canonicalUrl,
      },
    }),
  };
}

// Common SEO configurations for different page types
export const seoConfigs = {
  home: generateSEO({
    title: 'Stitches - Premium Clothing Brand | Luxury Fashion',
    description: 'Discover premium, sustainable clothing at Stitches. Shop our curated collection of luxury fashion pieces designed for the modern wardrobe.',
    keywords: ['premium clothing', 'luxury fashion', 'sustainable fashion', 'designer clothes', 'high-end fashion', 'stitches brand'],
  }),
  
  shop: generateSEO({
    title: 'Shop Premium Clothing | Stitches Collection',
    description: 'Browse our complete collection of premium clothing. From elegant dresses to sophisticated suits, find your perfect style at Stitches.',
    keywords: ['shop premium clothing', 'luxury collection', 'designer fashion', 'premium apparel', 'high-end clothing store'],
  }),
  
  about: generateSEO({
    title: 'About Stitches | Our Story & Values',
    description: 'Learn about Stitches commitment to sustainable luxury fashion. Discover our story, values, and dedication to craftsmanship.',
    keywords: ['about stitches', 'sustainable fashion brand', 'luxury clothing company', 'fashion brand story', 'ethical fashion'],
  }),
  
  contact: generateSEO({
    title: 'Contact Stitches | Customer Service & Support',
    description: 'Get in touch with Stitches customer service team. We are here to help with your orders, questions, and fashion needs.',
    keywords: ['contact stitches', 'customer service', 'fashion support', 'clothing brand contact', 'luxury fashion help'],
  }),
};

export default generateSEO;
