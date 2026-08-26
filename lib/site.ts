export const site = {
  name: "Sufyan Ul Haq",
  shortName: "Sufyan",
  url: "https://sufyanulhaq.com",
  navigation: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export function whatsappUrl(number: string, message?: string) {
  const digits = number.replace(/[^\d]/g, "");
  const text = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${digits}${text}`;
}
