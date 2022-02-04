import { nanoid } from 'nanoid';

// Library space:
const elements = {};
let currentState = [];
let currentHookIndex = 0;
let pendingEffects = [];

function useState(initialState) {
  if (currentHookIndex >= currentState.length) {
    currentState[currentHookIndex] = {
      type: 'useState',
      value: initialState
    };
  }

  const hookData = currentState[currentHookIndex];

  if (hookData.type !== 'useState') {
    throw new Error('Unexpected state found for useState');
  }

  currentHookIndex++;

  return [
    hookData.value,
    (newState) => hookData.value = newState
  ];
}

function useEffect(callback) {
  if (currentHookIndex >= currentState.length) {
    currentState[currentHookIndex] = {
      type: 'useEffect',
      previousEffectCleanup: undefined
    };
  }

  const hookData = currentState[currentHookIndex];

  if (hookData.type !== 'useEffect') {
    throw new Error('Unexpected state found for useEffect');
  }

  currentHookIndex++;

  pendingEffects.push(() => {
    if (hookData.previousEffectCleanup && typeof hookData.previousEffectCleanup !== 'function') {
      throw new Error('Effects should return either clean up function or nothing');
    }

    hookData.previousEffectCleanup?.();
    hookData.previousEffectCleanup = callback();
  });
}

function render(element) {
  if (!elements[element.id]) {
    elements[element.id] = [];
  }

  currentState = elements[element.id];
  currentHookIndex = 0;
  const result = element.type();
  pendingEffects.forEach(effect => effect());
  pendingEffects = [];
  return result;
}

function createElement(component) {
  return {
    id: nanoid(),
    type: component
  }
}

// User space:
function useCounter() {
  const [counter, setCounter] = useState(1);
  setCounter(counter + 1);

  useEffect(() => {
    if (counter % 2 === 1) {
      console.log(`Effect executed from render #${counter}`);
      return () => {
        console.log(`Effect cleaned up from render #${counter}`);
      }
    }
  });

  return counter;
}

function MyComponent() {
  console.log(`Render started`);

  try {
    const counter = useCounter();
    const [isFirstRender, setFirstRender] = useState(true);
    setFirstRender(false);

    return `Current count: ${counter} ${isFirstRender ? '(first render)' : ''}`;
  } finally {
    console.log(`Render finished`);
  }
}

const el = createElement(MyComponent);

for (let i = 0; i < 5; i++) {
  console.log(render(el));
}