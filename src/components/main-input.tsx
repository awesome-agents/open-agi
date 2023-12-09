"use client";

import { cn } from "@/lib/utils";
import { INPUT_CLASSNAMES } from "@/components/ui/input";
import InputModel from "@/components/input-model";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { CiFileOn, CiImageOn } from "react-icons/ci";
import { Button } from "@/components/ui/button";
import React, { useRef, useState } from "react";
import { getHotkeyHandler, useHotkeys } from "@mantine/hooks";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { nanoid } from "nanoid";

export default function MainInput() {
  const refInput = useRef<HTMLTextAreaElement>(null);
  const [input, setInput] = useState("");

  const router = useRouter();

  const submit = (event: KeyboardEvent | React.KeyboardEvent) => {
    if (!input.length) return toast.warning("input can't empty");
    if ((event as KeyboardEvent).isComposing) return;
    console.log("-- sending: ", input);
    setInput("");

    console.log("pusing ");
    router.push(`c/${nanoid()}`);
  };

  const focus = () => {
    if (refInput.current !== document.activeElement)
      return refInput.current?.focus();
  };

  useHotkeys([["space", focus]]);

  return (
    <div className={cn("flex flex-col gap-2 text-black", INPUT_CLASSNAMES)}>
      <div className={"flex gap-2"}>
        <InputModel />
      </div>

      <Separator orientation={"horizontal"} />

      <Textarea
        ref={refInput}
        placeholder={"Ask anything..."}
        className={"resize-none"}
        value={input}
        onChange={(event) => {
          setInput(event.currentTarget.value);
        }}
        onKeyDown={getHotkeyHandler([["enter", submit]])}
      />
      <div className={"text-muted-foreground"}>
        Space to focus, Enter to send
      </div>

      <div className={"flex w-full items-center justify-between gap-1 "}>
        <div className={"text-muted-foreground"}>{input.length ?? 0} words</div>

        <Separator orientation={"vertical"} className={"h-4"} />

        {/*<CiImageOn className={"h-6 w-6"} />*/}

        <CiFileOn className={"h-6 w-6"} />

        <Button className={"ml-auto "} size={"sm"}>
          Query
        </Button>
      </div>
    </div>
  );
}
