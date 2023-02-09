import "./globals.css";
import NavBar from "./Nav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme={"dark"}>
      <head />
      <body className="min-h-screen max-w-full">
        {/* @ts-expect-error Server Component */}
        <NavBar />
        {children}
      </body>
    </html>
  );
}
