import { Badges } from '@/types';
export default function Badge({ count = 0, className = '' }: Badges) {
  return <div className={className}>{count}</div>;
}
