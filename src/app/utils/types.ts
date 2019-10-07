export interface Owner {
	display_name: string;
	link: string;
	profile_image: string;
	reputation: number;
	user_id: number;
	user_type: string;
}

export interface Data {
	answer_count: number;
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

export interface AppStore {
	data: Data[] | null;
	addData: Data[] | null;
	loading: boolean;
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