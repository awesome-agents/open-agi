import { getServerAuthSession } from "@/server/auth";
import { api } from "@/trpc/server";
import MainInput from "@/components/main-input";

export default async function Home() {
  const hello = await api.post.hello.query({ text: "from tRPC" });
  const session = await getServerAuthSession();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className={"flex w-full flex-col gap-2 sm:w-[480px]"}>
        <div className={"my-4 text-center text-2xl font-normal"}>
          Open AGI To The World
        </div>

        <MainInput />
      </div>
    </main>
  );
}
