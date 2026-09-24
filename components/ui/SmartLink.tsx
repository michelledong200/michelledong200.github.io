import type { AnchorHTMLAttributes } from "react";

export function isExternal(href: string) {
  return /^https?:\/\//.test(href);
}

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

/** Anchor that opens http(s) links in a new tab with an sr-only hint; mailto and #hash links stay in place. */
export default function SmartLink({ href, children, ...rest }: Props) {
  if (!isExternal(href)) {
    return (
      <a href={href} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
      <span className="sr-only"> (opens in new tab)</span>
    </a>
  );
}
