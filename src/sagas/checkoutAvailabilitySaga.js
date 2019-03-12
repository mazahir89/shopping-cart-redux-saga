import { take, actionChannel, put } from "redux-saga/effects";

import { SET_SHIPPING_FETCH_STATUS, setCanCheckOut, FETCHED } from "../actions";

export function* checkoutAvailabilitySaga() {
  const checkoutAvaibilityChannel = yield actionChannel(
    SET_SHIPPING_FETCH_STATUS
  );
  while (true) {
    const { status } = yield take(checkoutAvaibilityChannel);
    yield put(setCanCheckOut(status === FETCHED));
  }
}
