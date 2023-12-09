import { getServerAuthSession } from "@/server/auth";
import { api } from "@/trpc/server";
import MainInput from "@/components/main-input";

export default async function Home() {
  const hello = await api.post.hello.query({ text: "from tRPC" });
  const session = await getServerAuthSession();

  return (
    <div className={"flex w-full flex-col gap-2 px-4 sm:w-[480px]"}>
      <div className={"my-4 text-center text-2xl font-normal"}>
        Open AGI To The World
      </div>

      <MainInput />
    </div>
  );
}
