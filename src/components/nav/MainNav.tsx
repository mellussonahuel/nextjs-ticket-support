'use client';
import Link from 'next/link';
import styles from './MainNav.module.css';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import Badge from '@/components/badge/Badge';

export default function MainNav() {
  const ticketsCount = useAppSelector(
    (state) => state.ticketReducer.tickets.length
  );
  return (
    <nav className={styles.navContainer}>
      <Link className={styles.navLink} href='/tickets/ticket'>
        Create Ticket
      </Link>
      <Link className={styles.navLink} href='/tickets/list'>
        Tickets backlog
        <Badge
          className='absolute -top-2 -right-2 text-xs'
          count={ticketsCount}
        />
      </Link>
    </nav>
  );
}
