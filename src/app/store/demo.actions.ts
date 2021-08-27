import { Action } from '@ngrx/store';

export const IS_LOADING = 'IS_LOADING';
export const ERROR_MESSAGE = 'ERROR_MESSAGE';
export const CURRENT_RECORDS = 'CURRENT_RECORDS';
export const CURRENT_RECORD = 'CURRENT_RECORD';
export const CURRENT_TABLE = 'CURRENT_TABLE';

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

export class CurrentRecords implements Action {
  readonly type = CURRENT_RECORDS;
  constructor(public payload: number) {}
}
