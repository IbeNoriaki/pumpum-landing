"use client";

import Link from "next/link";
import { Icons } from "../icons";
import {
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

interface Icon {
  icon: JSX.Element;
  url: string;
}

const icons: Icon[] = [
  { icon: <LinkedInLogoIcon />, url: "#" },
  { icon: <InstagramLogoIcon />, url: "#" },
  { icon: <TwitterLogoIcon />, url: "#" },
];

const links = [
  { text: "利用規約", url: "/terms" },
  { text: "プライバシーポリシー", url: "/privacy" },
  { text: "クリエイター規約", url: "/creator-terms" },
  { text: "特定商取引法に基づく表記", url: "/legal" },
];

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex items-center gap-2">
          <Icons.logo className="h-6 w-6" />
          <span className="font-bold">Pumpum</span>
        </div>
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          {links.map((link) => (
            <Link
              key={link.text}
              href={link.url}
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              {link.text}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
