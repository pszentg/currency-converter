import "./globals.css";

export const metadata = {
  title: "Currency Converter",
  description: "A simple currency converter app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
