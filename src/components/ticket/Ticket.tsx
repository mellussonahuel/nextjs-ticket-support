import { TicketType } from '@/types';
import Comment from './Comment';
import { useState } from 'react';
import Dropdown from '../selectors/Dropdown';
import { statuses } from '@/app/constants/constants';
export default function Ticket({ ticket }: TicketType) {
  const [showCommentsInput, setShowCommentsInput] = useState(false);
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { value } = event.target;
    ticket.status = value;
  };
  return (
    <div className='border border-white p-4 my-3 rounded' key={ticket.id}>
      <div>
        <span className='font-semibold'>Subject: </span>
        {ticket.subject}
      </div>
      <div>
        <span className='font-semibold'>Description: </span>
        {ticket.description}
      </div>
      <div>
        <span className='font-semibold'>Status: </span>
        {ticket.status}
        <div className='mt-3'>
          <Dropdown
            placeholder='Show all'
            options={statuses}
            name='filter'
            value={ticket.status}
            onChange={handleChange}
          />
        </div>
      </div>
      <div>
        <span className='font-semibold'>User: </span>
        {ticket.user}
      </div>
      <div className='flex justify-end mt-3'>
        <button onClick={() => setShowCommentsInput(!showCommentsInput)}>
          + Add a comment
        </button>
      </div>
      {showCommentsInput && <Comment id={ticket.id} />}

      <div>
        <ul>
          {ticket.comments.length ? (
            ticket.comments.map((comment, index) => (
              <li key={index}>{comment}</li>
            ))
          ) : (
            <li className='text-xs'>No comments yet</li>
          )}
        </ul>
      </div>
    </div>
  );
}
