'use client';
import styles from './Ticket.module.css';
import Input from '@/components/inputs/Input';
import { useState } from 'react';
import { useAppDispatch } from '@/redux/hooks';
import { addTicket } from '@/redux/features/ticketsSlice';
import Dropdown from '@/components/selectors/Dropdown';
import { statuses } from '@/app/constants/constants';
import { User, FormValues } from '@/types';

import { useGetUsersQuery } from '@/redux/services/userApi';

export default function Ticket() {
  const initialFormValues: FormValues = {
    id: null,
    subject: '',
    description: '',
    status: 'Open',
    user: '',
    comments: [],
  };

  const dispatch = useAppDispatch();
  const [formValues, setFormValues] = useState<FormValues>(initialFormValues);
  const { data, error, isLoading, isFetching } = useGetUsersQuery(null);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleFormSave = () => {
    dispatch(addTicket(formValues));
    setFormValues(initialFormValues);
  };

  const getFormatedUsers = (data: User[]) => {
    return data?.map((user: User) => {
      return {
        value: user.email,
        label: user.email,
      };
    });
  };

  const usersOptions = getFormatedUsers(data ?? []);

  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='contador mb-5'>
        <h1>New ticket</h1>

        {error ? (
          <p className='text-center'>An error ocurred ...</p>
        ) : isLoading || isFetching ? (
          <p className='text-center'>Loading ...</p>
        ) : (
          <>
            <div className={styles.formControl}>
              <Input
                type='text'
                name='subject'
                placeholder='Subject'
                value={formValues.subject}
                onChange={handleChange}
              />
            </div>
            <div className={styles.formControl}>
              <Input
                type='text'
                name='description'
                placeholder='Description'
                value={formValues.description}
                onChange={handleChange}
              />
            </div>
            <div className={styles.formControl}>
              <Dropdown
                placeholder='Select a status'
                defaultValue={'Open'}
                options={statuses}
                name='status'
                value={formValues.status}
                onChange={handleChange}
              />
            </div>
            <div className={styles.formControl}>
              <Dropdown
                placeholder='Assing to user'
                options={usersOptions}
                name='user'
                value={formValues.user}
                onChange={handleChange}
              />
            </div>
            <div className='text-center'>
              <button onClick={handleFormSave}>Save</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
