import { HTMLAttributes, ReactNode, ComponentProps } from "react";

// Basic shared interfaces
interface ClassName {
  className?: string;
}

interface Children {
  children: ReactNode;
}

// Combo interface
interface WithChildrenAndClass extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
}

// Type aliases instead of empty interfaces
type DivProps = ComponentProps<"div">;
type H2Props = ComponentProps<"h2">;
type H3Props = ComponentProps<"h3">;

// Optional HTML props container
interface HtmlAttr {
  props?: HTMLAttributes<HTMLElement>;
}

interface DivWithChildrenAndClass extends DivProps {
  children: ReactNode;
  className?: string;
}

export type {
  ClassName,
  Children,
  WithChildrenAndClass,
  DivWithChildrenAndClass,
  HtmlAttr,
  DivProps,
  H2Props,
  H3Props,
};
