import { ReactNode } from "react";
import { Container } from "../layout/Container";
import { Reveal } from "../motion/Reveal";

export function Section({
  children,
  className = "",
  id,
  reveal = false,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  reveal?: boolean;
}) {
  return (
    <section id={id} className={`py-16 sm:py-20 ${className}`}>
      <Container>{reveal ? <Reveal>{children}</Reveal> : children}</Container>
    </section>
  );
}
