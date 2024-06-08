import Todos from "./todos";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="items-center justify-between font-thin text-sm lg:flex m-10">
        {process.env.NEXT_PUBLIC_API_URL}
      </div>
      <Todos />
    </main>
  );
}
