import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface LinkItem {
  href: string;
  label: string;
}

const links: LinkItem[] = [
  {
    href: "/",
    label: "Hjem",
  },
  {
    href: "/vilkar-for-bruk",
    label: "Vilkår for bruk",
  },
  {
    href: "/personvern",
    label: "Personvern",
  },
  {
    href: "/informasjonskapsler",
    label: "Informasjonskapsler",
  },
];

const Footer = () => {
  return (
    <footer className="flex w-full justify-center py-4 text-primary-foreground">
      <div className="grid grid-cols-1 space-x-10 md:grid-cols-2">
        <div className="flex w-[500px] items-center space-x-2">
          <Image
            src="/images/csrep.png"
            width={200}
            height={140.75}
            alt="csrep"
          />
          <div>
            <p className="text-xl font-semibold">
              CSREP.no &copy; {new Date().getFullYear()}
            </p>
            <p>
              <a href="https://www.myrseth.tech/">Myrseth Technologies AS</a>
            </p>
            <p>Org. nr. 930 736 937</p>
          </div>
        </div>
        <div className="flex w-[500px] flex-col">
          <p className="text-xl font-semibold">Snarveier</p>
          <ul>
            {links.map((link) => (
              <FooterLink key={link.href} href={link.href} label={link.label} />
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const FooterLink: FC<LinkItem> = ({ href, label }) => {
  return (
    <li>
      <p>
        <Link href={href}>{label}</Link>
      </p>
    </li>
  );
};
