export type TextLine = { type: "text"; value: string };
export type LabelLine = { type: "label"; value: string };
export type LinkLine = { type: "link"; value: string; href: string };
export type HoursLine = { type: "hours"; day: string; time: string };

export type ContactLine = TextLine | LabelLine | LinkLine | HoursLine;

export type ContactItem = {
  icon: React.ElementType;
  title: string;
  lines: ContactLine[];
};
