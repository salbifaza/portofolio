import {cn} from '@/lib/utils';

export function Eyebrow({className, small, ...props}: React.HTMLAttributes<HTMLSpanElement> & {small?: boolean}) {
  return <span className={cn(small ? 'eyebrow-sm' : 'eyebrow', className)} {...props} />;
}
