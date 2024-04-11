import { configureStore } from "@reduxjs/toolkit";
import rootReducerWithPersistance from "../reducers/rootReducerWithPersist";
import { supabaseApi } from "../queries/authApi";

export const store = configureStore({
  reducer: rootReducerWithPersistance,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(supabaseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
