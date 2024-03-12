import { ReactNode } from "react";

export type TPath = {
  label: string;
  path?: string;
  element?: ReactNode;
  children?: TPath[];
};

export type TRoute = {
  path: string;
  element: ReactNode;
};

export type TSidebar = {
  key: string;
  label: ReactNode;
  children?: TSidebar[];
};
