import storage from "redux-persist/lib/storage";
import { supabaseApi } from "../queries/authApi";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["counter", supabaseApi.reducerPath],
};

export default persistConfig;
