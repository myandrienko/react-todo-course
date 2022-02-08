import { ConnectedCheckbox, ConnectedTextbox } from "./inputs";
import { FormRow } from "./FormRow";
import React from "react";

const fields = [
  { label: 'Task name', key: 'name', Component: ConnectedTextbox },
  { label: 'Done', key: 'done', Component: ConnectedCheckbox },
  { label: 'Urgent', key: 'urgent', Component: ConnectedCheckbox },
];

export function TaskFields() {
  return fields.map(({ label, key, Component }) => (
    <FormRow key={key} label={label}>
      <Component name={key}/>
    </FormRow>
  ));
}
