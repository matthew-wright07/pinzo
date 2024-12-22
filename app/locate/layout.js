import 'bootstrap/dist/css/bootstrap.min.css';
import { Analytics } from "@vercel/analytics/react";

// Export metadata directly in the layout file
export const metadata = {
  title: 'The Pinzo | Instantly Get Your Location',
  description: 'Easily find your exact location with The Pinzo. Click the button, and your current geolocation appears in seconds. Fast, simple, accurate.',
  keywords: 'current location, geolocation, instant location finder, GPS location, find my location, get location now, location accuracy, geolocation app',
  author: 'The Pinzo',
  openGraph: {
    title: 'The Pinzo | Instantly Get Your Location',
    description: 'Experience seamless location discovery. Click a button, and your exact geolocation is just a second away!',
    image: '/favicon.png', // Ensure this path is accurate
    url: 'https://www.thepinzo.com/geolocation', // Adjust URL for the specific page
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Pinzo | Instantly Get Your Location',
    description: 'Find your exact GPS location in real-time with The Pinzo. One click is all it takes.',
    image: '/favicon.png', // Ensure this path is accurate
  },
  icons: {
    icon: '/favicon.png', // Verify the favicon path
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
