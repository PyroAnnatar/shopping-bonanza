import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-lime-300 to-amber-200 grid place-items-center h-screen">
        {children}
      </body>
    </html>
  );
}
