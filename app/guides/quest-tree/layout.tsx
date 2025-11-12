import Link from "next/link";
import { worlds } from "@/data/worlds";

export default function QuestTreeLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      <nav className="w-64 border-r p-4 space-y-2">
        <h2 className="font-semibold mb-2">Worlds</h2>
        {Object.entries(worlds).map(([key, value]) => (
          <div key={key}>
            <Link href={`/guides/quest-tree/${key}`}>{value.title}</Link>
          </div>
        ))}
      </nav>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
