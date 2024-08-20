import { useState } from 'react';
import Input from '../inputs/Input';
import { useAppDispatch } from '@/redux/hooks';
import { addComment } from '@/redux/features/ticketsSlice';
import { CommentProps } from '@/types';

export default function Comment({ id }: CommentProps) {
  const [comment, setComment] = useState('');
  const dispatch = useAppDispatch();

  const handleCommentSave = () => {
    dispatch(addComment({ ticketId: id, comment }));
    setComment('');
  };

  return (
    <div>
      <div>
        <Input
          type='text'
          name='comment'
          placeholder='Add a comment'
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        />
      </div>
      <div className='text-center'>
        <button onClick={handleCommentSave}>Save</button>
      </div>
    </div>
  );
}
