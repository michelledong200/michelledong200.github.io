import { Mail } from "lucide-react";
import { site } from "@/content/site";
import SmartLink from "./SmartLink";
import { GitHubIcon, LinkedInIcon } from "./Icons";

const items = [
  { label: "Email", href: `mailto:${site.email}`, Icon: Mail },
  { label: "LinkedIn", href: site.links.linkedin, Icon: LinkedInIcon },
  { label: "GitHub", href: site.links.github, Icon: GitHubIcon },
];

/** Reference B-style icon + label link row: Email · LinkedIn · GitHub. */
export default function SocialLinks({
  className = "",
  include = ["Email", "LinkedIn", "GitHub"],
}: {
  className?: string;
  include?: string[];
}) {
  return (
    <ul className={`flex flex-wrap gap-x-2 gap-y-1 ${className}`}>
      {items
        .filter((i) => include.includes(i.label))
        .map(({ label, href, Icon }) => (
          <li key={label}>
            <SmartLink
              href={href}
              className="text-text-soft hover:text-accent-deep inline-flex min-h-11 items-center gap-2 rounded-md px-2 text-sm font-medium"
            >
              <Icon className="size-[18px]" aria-hidden="true" />
              {label}
            </SmartLink>
          </li>
        ))}
    </ul>
  );
}
