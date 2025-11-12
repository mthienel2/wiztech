import Link from "next/link";

const page = () => {
  return (
    <div>
      <p>This is the guides page!</p>
      <nav>
        <Link href="guides/quest-tree">Quest Tree</Link>
      </nav>
    </div>
  );
};

export default page;
