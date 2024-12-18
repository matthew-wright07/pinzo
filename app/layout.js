import 'bootstrap/dist/css/bootstrap.min.css';
import { Analytics } from "@vercel/analytics/react"

// Export metadata directly in the layout file
export const metadata = {
  title: 'The Pinzo | Get Your Current Location',
  description: 'Click the button to instantly retrieve your current location.',
  keywords: 'current location, geolocation, find my location, location button',
  author: 'The Pinzo',
  openGraph: {
    title: 'The Pinzo | Get Your Current Location',
    description: 'Click the button to instantly retrieve your current location.',
    image: '/favicon.png', // Update this to the correct path
    url: 'https://www.thepinzo.com',
  },
  twitter: {
    card: 'summary_large_image',
    image: '/favicon.png', // Update this to the correct path
  },
  icons: {
    icon: '/favicon.png', // Make sure your favicon is placed here
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5455709376701219"
     crossorigin="anonymous"></script>
      </head>
      <body>
        {children}
        <Analytics />
        </body>
    </html>
  );
}
