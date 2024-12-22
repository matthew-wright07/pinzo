import 'bootstrap/dist/css/bootstrap.min.css';
import { Analytics } from "@vercel/analytics/react";

// Export metadata directly in the layout file
export const metadata = {
  title: 'The Pinzo | Your Location, One Click Away',
  description: 'Discover your exact location with ease. Click a button to instantly get your current geolocation, anywhere, anytime.',
  keywords: 'current location, geolocation, find my location, location app, GPS finder, geolocation app, instant location',
  author: 'The Pinzo',
  openGraph: {
    title: 'The Pinzo | Your Location, One Click Away',
    description: 'Effortlessly discover your current location. Just one click to access accurate geolocation details!',
    image: '/favicon.png', // Update this to the correct path
    url: 'https://www.thepinzo.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Pinzo | Your Location, One Click Away',
    description: 'Find your current location with ease using The Pinzo. Click a button, get results instantly.',
    image: '/favicon.png', // Update this to the correct path
  },
  icons: {
    icon: '/favicon.png', // Ensure the favicon is correctly linked
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5455709376701219" 
        crossOrigin="anonymous"></script>
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
