import { persistReducer } from "redux-persist";
import persistConfig from "../configs/persistanceConfig";
import { rootReducer } from "./rootReducer";

const rootReducerWithPersistance = persistReducer(persistConfig, rootReducer);

export default rootReducerWithPersistance;
