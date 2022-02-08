import { Checkbox, Textbox, Field } from "./inputs";
import { FormRow } from "./FormRow";
import React from "react";

const fields = [
  { label: 'Task name', key: 'name', component: Textbox },
  { label: 'Done', key: 'done', component: Checkbox },
  { label: 'Urgent', key: 'urgent', component: Checkbox },
];

export function TaskFields() {
  return fields.map(({ label, key, component }) => (
    <FormRow key={key} label={label}>
      <Field name={key} component={component} data-test-id={`filed-${key}`}/>
    </FormRow>
  ));
}
