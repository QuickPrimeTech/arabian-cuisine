import { WithChildrenAndClass } from "@/types";
import { cn } from "@/lib/utils";

const Section = ({ children, className }: WithChildrenAndClass) => {
  return (
    <section className={cn("section-x section-y space-y-12", className)}>
      {children}
    </section>
  );
};
const Header = ({ children, className }: WithChildrenAndClass) => {
  return (
    <div className={cn("space-y-2 text-center", className)}>{children}</div>
  );
};

const Title = ({ children, className, ...props }: WithChildrenAndClass) => {
  return (
    <h2
      className={cn("font-bold text-2xl md:text-3xl lg:text-4xl", className)}
      {...props}
    >
      {children}
    </h2>
  );
};

const H1 = ({ children, className, ...props }: WithChildrenAndClass) => {
  return (
    <h1
      className={cn("font-bold text-3xl md:text-4xl lg:text-6xl", className)}
      {...props}
    >
      {children}
    </h1>
  );
};

const SubTitle = ({ children, className }: WithChildrenAndClass) => {
  return (
    <h3 className={cn("text-muted-foreground max-w-3xl mx-auto", className)}>
      {children}
    </h3>
  );
};

export { Section, Header, Title, SubTitle, H1 };
