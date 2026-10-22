import Link from 'next/link';
import {cn} from '@/lib/utils';

interface PillButtonProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  href: string;
  variant?: 'primary' | 'outline';
}

/** Internal paths go through next/link (base-path aware); everything else is a plain anchor. */
export function PillButton({href, variant = 'primary', className, children, ...props}: PillButtonProps) {
  const classes = cn('btn', variant === 'primary' ? 'btn-primary' : 'btn-outline', className);
  const internal = href.startsWith('/') || href.startsWith('#');
  if (internal) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }
  const external = /^https?:/.test(href);
  return (
    <a
      href={href}
      className={classes}
      {...(external ? {target: '_blank', rel: 'noopener noreferrer'} : {})}
      {...props}
    >
      {children}
    </a>
  );
}
