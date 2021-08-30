import { Action } from '@ngrx/store';

export const IS_LOADING = 'IS_LOADING';
export const ERROR_MESSAGE = 'ERROR_MESSAGE';
export const CURRENT_RECORDS = 'CURRENT_RECORDS';
export const CURRENT_RECORD = 'CURRENT_RECORD';
export const CURRENT_TABLE = 'CURRENT_TABLE';
export const DELETE_USER = 'DELETE_USER';

// Action:

// LOAD_TABLE_START
// LOAD_TABLE_SUCCESSED
// LOAD_TABLE_FAILED

// LOAD_RECORD_START
// LOAD_RECORD_SUCCESSED
// LOAD-RECORD_FAILED

export class Table implements Action {
  readonly type = CURRENT_TABLE;
  constructor(public payload: []) {}
}

export class DeleteUser implements Action {
  readonly type = DELETE_USER;
  constructor(public payload: number) {}
}
