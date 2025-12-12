import Link from "next/link";
import localFont from "next/font/local";

const shermlockFont = localFont({
  src: "../../fonts/Shermlock.ttf",
  display: "swap",
});

export default function QuestTreeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen">
      <nav
        className={`w-64 border-r p-4 flex flex-col space-y-2 ${shermlockFont.className}`}
      >
        <h1 className="text-3xl text-yellow-300 mb-2">Worlds</h1>
        <Link
          href="/guides/quest-tree/wizardcity"
          className="hover:text-blue-600"
        >
          Wizard City
        </Link>
        <Link
          href="/guides/quest-tree/krokotopia"
          className="hover:text-blue-600"
        >
          Krokotopia
        </Link>
      </nav>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
