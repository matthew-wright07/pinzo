import 'bootstrap/dist/css/bootstrap.min.css';
import { Analytics } from "@vercel/analytics/react";

// Export metadata directly in the layout file
export const metadata = {
  title: 'About The Pinzo | Discover, Locate, Simplify',
  description: 'Learn about The Pinzo, the app designed to make finding your current location simple and instant. Discover our mission and how we aim to improve your experience.',
  keywords: 'about The Pinzo, location app, geolocation app mission, find my location app, instant location services, location accuracy, about us, The Pinzo team',
  author: 'The Pinzo',
  openGraph: {
    title: 'About The Pinzo | Discover, Locate, Simplify',
    description: 'Learn about The Pinzo and our mission to simplify geolocation. Find out why users trust us for accurate, instant location discovery.',
    image: '/favicon.png', // Ensure this path is accurate
    url: 'https://www.thepinzo.com/about', // Adjust URL for the About page
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About The Pinzo | Discover, Locate, Simplify',
    description: 'Find out more about The Pinzo, the geolocation app designed to make finding your location easy and instant.',
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
