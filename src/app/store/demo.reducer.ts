import * as appActions from './demo.actions';

export interface AppState {
  isLoading: boolean;
  errorMessage: string;
  currentRecords: object[];
  currentRecord: object;
  currentTable: any[];
}

const appState: AppState = {
  isLoading: false,
  errorMessage: '',
  currentRecords: [],
  currentRecord: {},
  currentTable: [],
};

// State :
// IsLoading : bool
// ErrorMessage : string
// CurrentRecords : account[] | contact[] { Object[] }
// CurrentRecord : account | contact { Object }
// CurrentTable : Table
// CurrentUser : user

export function appReducer(state: AppState = appState, action: any): AppState {
  switch (action.type) {
    case appActions.CURRENT_TABLE:
      return {
        ...appState,
        currentTable: action.payload,
      };
      break;
    case appActions.DELETE_USER:
      const users: any = state.currentTable.splice(action.payload, 1);
      return {
        ...appState,
        currentTable: users,
      };
      break;

    default:
      return appState;
      break;
  }
}
