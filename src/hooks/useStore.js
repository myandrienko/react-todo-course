import { useEffect, useState } from "react";

export function useStore(store, selector = (state) => state) {
  const [state, setState] = useState(() => selector(store.getState()));

  useEffect(() => {
    return store.subscribe((state) => {
      setState(selector(state));
    });
  }, [store, selector]);

  return state;
}