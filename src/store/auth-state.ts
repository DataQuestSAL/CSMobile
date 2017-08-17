

export interface AuthState {
    inProgress: boolean;            // are we taking some network action
    isLoggedIn: boolean;            // is the user logged in or not
    tokenCheckComplete: boolean;    // have we checked for a persisted user token
    user: Object;                   // current user | null
    error?: Object;                 // if an error occurred | null
}


export const INITIAL_AUTH_STATE: AuthState = {
    inProgress: false,
    isLoggedIn: false,
    tokenCheckComplete: false,
    user: null
};