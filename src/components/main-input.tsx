"use client";

import { cn } from "@/lib/utils";
import { INPUT_CLASSNAMES } from "@/components/ui/input";
import InputModel from "@/components/input-model";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { CiFileOn, CiImageOn } from "react-icons/ci";
import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";

export default function MainInput() {
  const refInput = useRef<HTMLTextAreaElement>(null);
  const [input, setInput] = useState("");

  return (
    <div className={cn("flex flex-col gap-2 text-black", INPUT_CLASSNAMES)}>
      <div className={"flex gap-2"}>
        <InputModel />
      </div>

      <Separator orientation={"horizontal"} />

      <Textarea
        placeholder={"Ask anything..."}
        className={"resize-none"}
        value={input}
        onChange={(event) => {
          setInput(event.currentTarget.value);
        }}
      />

      <div className={"flex w-full items-center justify-between gap-1 "}>
        <div className={"text-muted-foreground"}>{input.length ?? 0} words</div>

        <Separator orientation={"vertical"} className={"h-4"} />

        <CiImageOn className={"h-6 w-6"} />

        <CiFileOn className={"h-6 w-6"} />

        <Button className={"ml-auto "} size={"sm"}>
          Send
        </Button>
      </div>
    </div>
  );
}
