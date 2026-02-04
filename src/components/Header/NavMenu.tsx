import { ContactUsSheet } from "@/components/ContactUsSheet"

const navLinks = [
  { title: "Press Kit", href: "#press", type: "link" },
  { title: "Our Games", href: "#games", type: "link" },
  { title: "Сontact Us", href: "#contact", type: "action"},

];

export const NavMenu = () => {
  return (
    <nav className="flex overflow-x-auto no-scrollbar whitespace-nowrap md:overflow-visible py-2 gap-6">
      {navLinks.map((link) => {
        console.log(link)
        if (link.type === "action") {
          return <ContactUsSheet key={link.title} title={link.title} />;
        }
        return(
          <a 
            key={link.title}
            href={link.href} 
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            {link.title}
          </a>
        )
      })}
    </nav>
  );
};