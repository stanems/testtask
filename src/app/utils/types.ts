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
  answers: Answer[];
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

export interface AddRequestParam {
  type: string;
  value: string | number;
}

export interface RequestParams {
  initialRequest: string;
  sortBy: string;
  orderBy: string;
  addTableParam: AddRequestParam | null;
}

export interface AppStore {
  requestParams: RequestParams;
  mainResult: {
    data: Question[] | [];
    type: string;
  };
  addResult: {
    data: Question[] | [];
    type: string;
  };
  loading: boolean;
  selectedPost: any;
}

export interface Action {
  type: string;
}

export interface AnyAction extends Action {
  // Allows any extra properties to be defined in an action.
  [extraProps: string]: any;
}

export interface SearchParams {
  sortBy: string;
  orderBy: string;
  fromTable: string;
  initialRequest: string;
  searchParam: AddRequestParam;
}

export const AddDataTypes = {
  AUTHOR: 'author',
  TAG: 'tag',
};

export const SortVariation = {
  ACTIVITY: 'activity',
  CREATION: 'creation',
  VOTES: 'votes',
};

export const OrderVariation = {
  DESC: 'desc',
  ASC: 'asc',
};

export const TableTypes = {
  MAIN: 'main',
  ADD: 'add',
};
