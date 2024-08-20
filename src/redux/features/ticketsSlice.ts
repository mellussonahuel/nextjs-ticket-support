import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Ticket {
  id: number | null;
  subject: string;
  description: string;
  user: string;
  status: string;
  comments: string[];
}

interface TicketsState {
  tickets: Ticket[];
}

const initialState: TicketsState = {
  tickets: [
    {
      id: 1,
      subject: 'Error in home ui',
      description: 'There is an error on home ui',
      status: 'open',
      user: 'Karley_Dach@jasper.info',
      comments: [],
    },
    {
      id: 2,
      subject: 'Add new feature',
      description: 'Add a comment',
      status: 'in-progress',
      user: 'Sincere@april.biz',
      comments: [],
    },
  ],
};

export const ticketSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    addTicket: (state, action: PayloadAction<Ticket>) => {
      state.tickets.push(action.payload);
    },
    addComment: (
      state,
      action: PayloadAction<{ ticketId: number | null; comment: string }>
    ) => {
      const { ticketId, comment } = action.payload;
      let ticket = state.tickets.find((ticket) => (ticket.id = ticketId));
      ticket?.comments.push(comment);
    },
  },
});

export const { addTicket, addComment } = ticketSlice.actions;
export default ticketSlice.reducer;
