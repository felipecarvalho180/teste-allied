import { FormControl, InputAdornment, OutlinedInput } from '@material-ui/core';
import { FormikContextType, FormikValues } from 'formik';
import React from 'react';
import { IconType } from 'react-icons';
import ErrorMessage from '../error-label';
import { InputWrapper } from './style';
import InputMask from 'react-input-mask';

interface PhoneInputProps {
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

export const phoneRegex = /\(\d{2,}\) \d{4,}\-\d{4}/g;

function PhoneInput({
  Icon,
  value,
  name,
  id,
  placeholder,
  type,
  onBlur,
  formik,
  onChange,
}: PhoneInputProps) {
  return (
    <InputWrapper>
      <FormControl style={{ marginBottom: 16 }}>
        <InputMask
          id={id}
          name={name}
          mask="(99) 99999-9999"
          guide
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

export default PhoneInput;
