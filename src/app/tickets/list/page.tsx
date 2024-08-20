'use client';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import Ticket from '@/components/ticket/Ticket';
import Dropdown from '@/components/selectors/Dropdown';
import { useState } from 'react';
import { statuses } from '@/app/constants/constants';

export default function TicketBackLog() {
  const tickets = useAppSelector((state) => state.ticketReducer.tickets);
  const [filter, setFilter] = useState('-');

  const filteredTickets = () => {
    return filter === '-'
      ? tickets
      : tickets.filter((ticket) => ticket.status === filter);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { value } = event.target;
    setFilter(value);
  };

  return (
    <div className='flex justify-center w-3/5 m-auto'>
      <ul className='mr-4'>
        {filteredTickets().length ? (
          filteredTickets().map((ticket, index) => (
            <li key={index}>
              <Ticket ticket={ticket} />
            </li>
          ))
        ) : (
          <li>No tickets yet</li>
        )}
      </ul>
      <div className='mt-3'>
        <Dropdown
          placeholder='Show all'
          options={statuses}
          name='filter'
          value={filter}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
