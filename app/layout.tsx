export const metadata = {
  title: "Jonathan",
  description: "Generated by JAC",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <h1>Hello World</h1>
        {children}
      </body>
    </html>
  );
}
