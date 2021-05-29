import { FormControl, InputAdornment, OutlinedInput } from '@material-ui/core';
import { FormikContextType, FormikValues } from 'formik';
import React from 'react';
import { IconType } from 'react-icons';
import ErrorMessage from '../error-label';
import { InputWrapper } from './style';
import InputMask from 'react-input-mask';

interface CPFInputProps {
  Icon: IconType;
  value: string;
  name: string;
  id: string;
  placeholder: string;
  type?: string;
  onBlur: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  formik: FormikContextType<FormikValues>;
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

function CPFInput({
  Icon,
  value,
  name,
  id,
  placeholder,
  type,
  onBlur,
  formik,
  onChange,
}: CPFInputProps) {
  return (
    <InputWrapper>
      <FormControl style={{ marginBottom: 16 }}>
        <InputMask
          id={id}
          name={name}
          mask="999.999.999-99"
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          maskChar="_"
        >
          {() => (
            <OutlinedInput
              error={!!(formik.errors[name] && formik.touched[name])}
              id={id}
              name={name}
              style={{
                background: '#F7FAFC',
              }}
              type={type ? type : 'text'}
              placeholder={placeholder}
              startAdornment={
                <InputAdornment position="start">
                  <Icon />
                </InputAdornment>
              }
            />
          )}
        </InputMask>
      </FormControl>
      {formik.errors[name] && formik.touched[name] ? (
        <ErrorMessage label={formik.errors[name]} />
      ) : null}
    </InputWrapper>
  );
}

export default CPFInput;
