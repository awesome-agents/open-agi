"use client";

import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ReactNode, useState } from "react";
import _ from "lodash";

export const models = ["agent-assistant", "gpt-3.5-turbo", "gpt-4"] as const;
export type Model = (typeof models)[number];

export default function InputModel() {
  const [model, setModel] = useState<Model>(models[0]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={"outline-none "}>
        <Badge variant={"secondary"}>{getModelTitle(model)}</Badge>
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
              {/*{`${getModelTitle(model)} (${model})`}*/}
              {getModelTitle(model)}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

/**
 * todo: 要不要渲染 model 的类型，以及做一些变换
 * @param model
 */
const getModelTitle = (model: Model): ReactNode => {
  return model;
  let modelTitle = model as string;
  if (modelTitle === "gpt-4") modelTitle += " ★";

  const AGENT_PREFIX = "agent-";
  if (modelTitle.startsWith(AGENT_PREFIX))
    modelTitle = modelTitle.slice(AGENT_PREFIX.length) + "-agent";
  modelTitle = _.startCase(_.toLower(modelTitle));
  return modelTitle;
};
