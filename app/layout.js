import 'bootstrap/dist/css/bootstrap.min.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5455709376701219"
     crossorigin="anonymous"></script>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
