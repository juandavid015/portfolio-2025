import Header from "@/components/header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1>Hello World</h1>
      </main>
      <footer>
        <p>Footer</p>
      </footer>
    </>
  );
}
