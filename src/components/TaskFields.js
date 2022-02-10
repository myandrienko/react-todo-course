import { FormRow } from "./FormRow";
import React from "react";
import { ErrorMessage, Field, useFormikContext } from 'formik';
import { nanoid } from "nanoid";

export function TaskFields() {
  const context = useFormikContext();

  function handleGenerateRandomNameClick() {
    context.setFieldValue('name', `Random name ${nanoid()}`, true);
  }

  return <>
    <FormRow label='Name'>
      <Field name='name'/>
      <button type='button' onClick={handleGenerateRandomNameClick}>🎲</button>
      <ErrorMessage name='name'/>
    </FormRow>
    <FormRow label='Done'>
      <Field type='checkbox' name='done'/>
      <ErrorMessage name='done'/>
    </FormRow>
    <FormRow label='Urgent'>
      <Field type='checkbox' name='urgent'/>
      <ErrorMessage name='urgent'/>
    </FormRow>
  </>;
}
