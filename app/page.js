import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center gap-y-4">
        <p className="text-2xl font-bold ">Welcome to the official website of GDSC PESU.</p>
        <p className="text-2xl ">Prepare yourself for the best {";)"}</p>
      </div>
    </main>
  );
}
