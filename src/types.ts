export type User = {
  id: number;
  name: string;
  email: string;
  username: string;
};

export type Badges = {
  count?: number;
  className?: string;
};

export type TicketType = {
  ticket: {
    id: number | null;
    subject: string;
    description: string;
    status: string;
    user: string;
    comments: Array<string>;
  };
};

export type CommentProps = {
  id: number | null;
};

export interface FormValues {
  id: number | null;
  subject: string;
  description: string;
  status: string;
  user: string;
  comments: [];
}
