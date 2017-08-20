
export interface UiState {
    //userId: number;
    //currentThreadId: number;
    //currentError?: string;
    inProgress: boolean;
    inProgressMessage: string;
    error: {
        message: string;
    }
}


export const INITIAL_UI_STATE: UiState = {
    //userId: undefined,
    //currentThreadId: undefined,
    inProgress: false,
    inProgressMessage: undefined,
    error: {
        message: undefined
    }
};