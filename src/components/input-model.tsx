"use client";

import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

export const models = ["gpt-3.5-turbo", "gpt-4"] as const;
export type Model = (typeof models)[number];

export default function InputModel() {
  const [model, setModel] = useState<Model>(models[1]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Badge>
          {model.toUpperCase()}
          {model === "gpt-4" ? " ★" : ""}
        </Badge>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuGroup>
          {models.map((model) => (
            <DropdownMenuItem
              key={model}
              onClick={() => {
                setModel(model);
              }}
            >
              {model.toUpperCase()}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
