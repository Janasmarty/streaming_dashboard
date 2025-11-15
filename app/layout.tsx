import "./globals.css";

export const metadata = {
  title: "Movie Dashboard",
  description: "Streaming dashboard using OMDb API",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
