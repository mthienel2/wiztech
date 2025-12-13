import Link from "next/link";
import localFont from "next/font/local";
import Image from "next/image";

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
          <Image
            src="/Wizard_City.png"
            width={96}
            height={96}
            alt="Wizard City Logo"
          ></Image>
          <span className="px-2">Wizard City</span>
        </Link>
        <Link
          href="/guides/quest-tree/krokotopia"
          className="hover:text-blue-600"
        >
          <Image
            src="/Krokotopia.png"
            width={96}
            height={96}
            alt="Krokotopia Logo"
          ></Image>
          <span className="px-2">Krokotopia</span>
        </Link>
        <Link
          href="/guides/quest-tree/marleybone"
          className="hover:text-blue-600"
        >
          <Image
            src="/Krokotopia.png"
            width={96}
            height={96}
            alt="Krokotopia Logo"
          ></Image>
          <span className="px-2">Marleybone</span>
        </Link>
      </nav>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
