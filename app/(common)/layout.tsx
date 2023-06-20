import "styles/common.css";
import Link from "next/link";

function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="w-full light">
      <body className="bg-white dark:bg-blue-black">
        <div className="w-full h-20 bg-white z-50 fixed shadow-md flex flex-row gap-8 justify-center items-center">
          <Link
            className="bg-blue-500 text-white p-2 rounded-md"
            prefetch={false}
            href="/"
          >
            Home
          </Link>
          <Link
            className="bg-blue-500 text-white p-2 rounded-md"
            prefetch={false}
            href="/events"
          >
            Events
          </Link>
        </div>
        <div className="relative w-full overflow-x-clip bg-slate-500">
          {children}
        </div>
      </body>
    </html>
  );
}

export default RootLayout;
