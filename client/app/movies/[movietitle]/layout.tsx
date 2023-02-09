export default function MovieTitleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="min-h-screen max-w-full pt-10">{children}</div>;
}
