import { AppStore } from "./types";

export const getQuestionId = (state: AppStore) => state.selectedPost.question && state.selectedPost.question.question_id