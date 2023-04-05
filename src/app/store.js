import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import userReducer from "../features/userSlice";
import valueReducer from "../features/valSlice";
import batchReducer from "../features/batchSlice";
const reducer = combineReducers({
  user: userReducer,
  manu: valueReducer,
  batch: batchReducer,
});

const persistConfig = {
  key: root,
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});
