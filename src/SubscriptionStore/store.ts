import { useEffect, useState } from "react";

type Store<T> = {
  getState: () => T;
  setState: (v: T | ((v: T) => T)) => void;
  subscribe: (callback: () => void) => () => void;
};

export const createStore = <T extends unknown>(initialState: T): Store<T> => {
  let state = initialState;
  const callbacks = new Set<() => void>();
  const getState = () => state;
  const setState = (nextState: T | ((v: T) => T)) => {
    state =
      typeof nextState === "function"
        ? (nextState as (prev: T) => T)(state)
        : nextState;
    callbacks.forEach((c) => c());
  };
  const subscribe = (callback: () => void) => {
    callbacks.add(callback);
    return () => {
      callbacks.delete(callback);
    };
  };

  return { getState, setState, subscribe };
};

export const useStore = (store) => {
  const [state, setState] = useState(store.getState());

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setState(store.getState());
    });
    setState(store.getState());
    return unsubscribe;
  }, [store]);

  return [state, store.setState];
};
