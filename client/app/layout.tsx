import "./globals.css";
import Nav from "./Nav";
import Footer from "./Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="min-h-screen max-w-full bg-zinc-800">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
