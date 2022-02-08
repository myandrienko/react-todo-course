import { reducer } from "./reducer";

it('correctly handles TRACK action', () => {
  const initialState = {
    habits: [{
      id: 1,
      name: 'Test',
      streak: [],
      currentStreak: 0
    }]
  };

  const newState = reducer(initialState, {
    type: 'TRACK',
    payload: { habitId: 1 }
  });

  expect(newState).toMatchObject({
    habits: [{
      id: 1,
      name: 'Test',
      streak: ['2022-02-08'],
      currentStreak: 1
    }]
  });
});