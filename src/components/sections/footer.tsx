"use client";

import { Icons } from "@/components/icons";
import { siteConfig } from "@/lib/config";
import {
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";

interface Icon {
  icon: JSX.Element;
  url: string;
}

const icons: Icon[] = [
  { icon: <LinkedInLogoIcon />, url: "#" },
  { icon: <InstagramLogoIcon />, url: "#" },
  { icon: <TwitterLogoIcon />, url: "#" },
];

type Link = {
  text: string;
  url: string;
};

const links: Link[] = [
  { text: "利用規約", url: "/terms" },
  { text: "クリエイター規約", url: "/creator-terms" },
  { text: "プライバシーポリシー", url: "/privacy" },
  { text: "特定商取引法に基づく表記", url: "/legal" },
];

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col gap-4 py-10">
        <ul className="flex flex-wrap gap-4">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                href={link.url}
                className="text-sm text-muted-foreground hover:text-primary"
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-2">
            <Icons.logo className="h-5 w-5" />
            <span className="text-sm font-medium">{siteConfig.name}</span>
          </div>
          <a
            href={siteConfig.links.twitter}
            className="text-muted-foreground hover:text-foreground"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterLogoIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
