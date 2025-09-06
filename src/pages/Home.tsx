import { Link } from "react-router";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">Welcome to Home</h1>
        <Link to={"/dashboard"} className="text-blue-600">
          Go to Dashboard
        </Link>
      </div>
    </main>
  );
}
