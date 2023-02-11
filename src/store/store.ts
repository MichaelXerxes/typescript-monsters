import { compose, applyMiddleware, Middleware } from "redux";
import { legacy_createStore as createStore } from "redux";
import { persistStore, persistReducer, PersistConfig } from "redux-persist";
import logger from "redux-logger";
import { RootReducer } from "./root-reducer";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";

export type RootState = ReturnType<typeof RootReducer>;

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

type ExtendedPersistConfig = PersistConfig<RootState> & {
  whitelist: (keyof RootState)[];
};

const sagaMiddleware = createSagaMiddleware();

const persistConfig: ExtendedPersistConfig = {
  key: "root",
  storage,
  whitelist: ['json'],
};

const persistedReducer = persistReducer(persistConfig, RootReducer);

// const composeEnhancer =
//   (process.env.NODE_ENV !== "production" &&
//     window &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;

const middleWares = [
  process.env.NODE_ENV !== "production" && logger,
  sagaMiddleware,
].filter((middleware): middleware is Middleware => Boolean(middleware));

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);
