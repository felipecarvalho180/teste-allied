import { FormikErrors } from 'formik';
import React from 'react';
import { Label } from './style';

interface ErrorLabelProps {
  label: string | string[] | FormikErrors<any> | FormikErrors<any>[];
}

function ErrorMessage({ label }: ErrorLabelProps) {
  return <Label>{label}</Label>;
}

export default ErrorMessage;
