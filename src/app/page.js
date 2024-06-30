import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Welcome to Todo App</h1>
      <Link legacyBehavior href="/todoLists">
        <a className="text-blue-500">Manage Todo Lists</a>
      </Link>
    </div>
  );
}
