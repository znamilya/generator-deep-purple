import { call, put, takeLatest, select } from 'redux-saga/effects';
import { normalize } from 'normalizr';

import ACTION_TYPES from './actionTypes';


export default function* <%= name %>Saga() {
    yield [
        // listen to redux actions here
    ];
}
