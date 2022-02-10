import { Store } from "./store";

describe('Store', () => {
  it('should apply initial state', () => {
    const store = new Store({ answer: 42 });
    expect(store.getState()).toMatchObject({ answer: 42 });
  });

  it('should apply immutable updates', () => {
    const store = new Store({ answer: 42 });

    const oldState = store.getState();
    store.update((state) => {
      state.answer = 43;
    });
    const newState = store.getState();

    expect(newState).toMatchObject({ answer: 43 });
    expect(oldState).toMatchObject({ answer: 42 });
    expect(newState).not.toBe(oldState);
  })

  it('should call listeners on update', () => {
    const store = new Store({ answer: 42 });
    const listener = jest.fn();

    store.subscribe(listener);
    store.update((state) => {
      state.answer = 43;
    });

    expect(listener).toBeCalledTimes(1);
    expect(listener).toBeCalledWith({ answer: 43 });
  })

  it('should unsubscribe', () => {
    const store = new Store({ answer: 42 });
    const listener = jest.fn();

    const unsubscribe = store.subscribe(listener);
    unsubscribe();

    store.update((state) => {
      state.answer = 43;
    });

    expect(listener).toBeCalledTimes(0);
  })
});