export interface Owner {
  display_name: string;
  link: string;
  profile_image: string;
  reputation: number;
  user_id: number;
  user_type: string;
}

export interface Question {
  answer_count: number;
  body: string;
  creation_date: number;
  is_answered: boolean;
  last_activity_date: number;
  last_edit_date: number;
  link: string;
  owner: Owner;
  question_id: number;
  score: number;
  tags: string[];
  title: string;
  view_count: number;
}

export interface Answer {
  answer_id: number;
  body: string;
  creation_date: number;
  is_accepted: boolean;
  last_activity_date: number;
  last_edit_date: number;
  owner: Owner;
  question_id: number;
  score: number;
}

export interface Post {
  question: Question | null,
  answers: Answer[] | [],
}

export interface AppStore {
  data: Question[] | [];
  addData: Question[] | [];
  loading: boolean;
  selectedPost: Post
}

export interface Action {
  type: string;
}

export interface AnyAction extends Action {
  // Allows any extra properties to be defined in an action.
  [extraProps: string]: any;
}

export const AddDataTypes = {
  AUTHOR: 'author',
  TAG: 'tag'
}

export const SortVariation = {
  ACTIVITY: 'activity',
  CREATION: 'creation',
  VOTES: 'votes'
}

export const OrderVariation = {
  DESC: 'desc',
  ASC: 'asc'
}