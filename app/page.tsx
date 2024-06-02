
import Link from "next/link";


export default function Home() {
  return (
      <div className="h-screen flex items-center justify-center">
        <div className="flex flex-col gap-y-3">
          <h1 className="tracking-tight font-bold text-5xl text-orange-400">Przemysław Czajka</h1>
          <p className="text-3xl text-center">Nr albumu: 119752</p>

          <Link href="/nowa" className="text-xs font-bold">Przejdź do drugiej strony</Link>
        </div>
      </div>
  );
}