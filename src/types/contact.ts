import { LucideIcon } from "lucide-react";

type TextLine = {
  type: "text" | "label";
  value: string;
};

type LinkLine = {
  type: "link";
  value: string;
  href: string;
};

type HoursLine = {
  type: "hours";
  day: string;
  time: string;
};

type Line = TextLine | LinkLine | HoursLine;

export type ContactItem = {
  icon: LucideIcon;
  title: string;
  lines: Line[];
};
