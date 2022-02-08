import { Checkbox, Textbox } from "./connectedInputs";
import { FormRow } from "./FormRow";
import React from "react";

const fields = [
  { label: 'Task name', key: 'name', Component: Textbox },
  { label: 'Done', key: 'done', Component: Checkbox },
  { label: 'Urgent', key: 'urgent', Component: Checkbox },
];

export function TaskFields() {
  return fields.map(({ label, key, Component }) => (
    <FormRow key={key} label={label}>
      <Component name={key}/>
    </FormRow>
  ));
}
