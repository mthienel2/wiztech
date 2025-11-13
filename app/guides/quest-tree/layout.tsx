import Link from "next/link";

export default function QuestTreeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen">
      <nav className="w-64 border-r p-4 flex flex-col space-y-2">
        <h2 className="font-semibold mb-2">Worlds</h2>
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
