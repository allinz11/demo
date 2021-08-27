import * as appActions from './demo.actions';
interface InitialState {
  color: string;
  border: number;
  size: number;
}

export interface AppState {
  isLoading: boolean;
  errorMessage: string;
  currentRecords: object[];
  currentRecord: object;
  currentTable: [];
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

    default:
      return appState;
      break;
  }
}

// export function blockReducer(
//   state: AppState = appState,
//   action: Action
// ): AppState {
//   switch (action.type) {
//     case appActions.COLOR:
//       return {
//         ...state,
//         color: action.payload,
//       };
//       break;
//     case appActions.BORDER:
//       return {
//         ...state,
//         border: action.payload,
//       };
//       break;
//     case appActions.SIZE:
//       return {
//         ...state,
//         size: action.payload,
//       };
//       break;
//     default:
//       return initialState;
//       break;
//   }
// }
