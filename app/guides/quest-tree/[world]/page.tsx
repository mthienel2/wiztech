import { notFound } from "next/navigation";
import { worlds } from "@/data/worlds";

type WorldKey = keyof typeof worlds;

export async function generateStaticParams() {
  return (Object.keys(worlds) as WorldKey[]).map((world) => ({ world }));
}

export default async function WorldQuestTreePage({
  params,
}: {
  params: Promise<{ world: string }>;
}) {
  const { world } = await params;
  const worldKey = world as WorldKey;

  const data = worlds[worldKey];
  if (!data) return notFound();

  return (
    <div>
      <h1>{data.title}</h1>
      <ul>
        {data.quests.map((q) => (
          <li key={q}>{q}</li>
        ))}
      </ul>
    </div>
  );
}
