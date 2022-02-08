import { produce } from 'immer';

const state = {
  habits: [
    {
      id: 1,
      name: 'Drink more water',
      streak: [
        '2022-02-07',
        '2022-02-08'
      ],
      currentStreak: 2
    },
    {
      id: 2,
      name: 'Walk outside',
      streak: [
        '2022-02-07'
      ],
      currentStreak: 0
    }
  ]
};

export function reducer(state, action) {
  console.log('Received action:', action);
  const today = new Date().toISOString().slice(0, 10);

  switch (action.type) {
    case 'TRACK':
      return produce(state, (draft) => {
        const habit = draft.habits.find(habit => habit.id === action.payload.habitId);
        habit.streak.push(today);
        habit.currentStreak++;
      });

    case 'ADD_HABIT':
      return produce(state, (draft) => {
        const newId = Math.max(...draft.habits.map(habit => habit.id)) + 1;
        draft.habits.push({
          id: newId,
          name: action.payload.name,
          streak: [],
          currentStreak: 0
        })
      })
  }
}