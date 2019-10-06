export interface Data {

}

export interface AppStore {
	data: [] | null;
	loading: boolean;
}

export interface Action {
	type: string;
}

export interface AnyAction extends Action {
	// Allows any extra properties to be defined in an action.
	[extraProps: string]: any;
}