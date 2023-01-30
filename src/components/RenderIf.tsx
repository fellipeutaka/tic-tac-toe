import { Fragment } from "react";

type RenderIfProps = {
  children: React.ReactNode;
  condition: boolean;
};

export function RenderIf({ condition, children }: RenderIfProps) {
  return condition ? <Fragment>{children}</Fragment> : null;
}
