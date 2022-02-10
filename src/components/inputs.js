import React from 'react';

export function Checkbox({ value, onChange, ...props }) {
  function handleChange(event) {
    onChange(event.target.checked);
  }

  return <input {...props} type='checkbox' checked={value} onChange={handleChange}/>;
}

export function Textbox({ onChange, ...props }) {
  function handleChange(event) {
    onChange(event.target.value);
  }

  return <input {...props} onChange={handleChange}/>;
}

// function useFormProps(name) {
//   const { task, dispatch } = useContext(TaskContext);
//   const value = task[name];
//
//   const handleOnChange = useCallback((payload) => {
//     dispatch({ type: 'CHANGE', payload });
//   }, [dispatch]);
//
//   return { value, onChange: handleOnChange, name };
// }
//
// function connect(Component) {
//   return function ConnectedComponent({ name, ...props }) {
//     const formProps = useFormProps(name);
//     return <Component {...props} {...formProps}/>;
//   }
// }
//
// export const ConnectedCheckbox = connect(Checkbox);
// export const ConnectedTextbox = connect(Textbox);
//
// export function Field({ name, component: Component, children: render, ...props }) {
//   const formProps = useFormProps(name);
//
//   if (typeof render === 'function') {
//     return render(formProps);
//   }
//
//   if (Component) {
//     return <Component {...props} {...formProps}/>;
//   }
//
//   throw new Error('Neither component nor render function provided');
// }
