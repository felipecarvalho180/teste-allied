import { FormControl, InputAdornment, OutlinedInput } from '@material-ui/core';
import { FormikContextType, FormikValues } from 'formik';
import React from 'react';
import { IconType } from 'react-icons';
import ErrorMessage from '../error-label';
import { InputWrapper } from './style';

interface IconInputProps {
  Icon: IconType;
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  value: string;
  name: string;
  id: string;
  placeholder: string;
  type?: string;
  onBlur: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  formik: FormikContextType<FormikValues>;
}

function IconInput({
  Icon,
  onChange,
  value,
  name,
  id,
  placeholder,
  type,
  onBlur,
  formik,
}: IconInputProps) {
  return (
    <InputWrapper>
      <FormControl style={{ marginBottom: 16 }}>
        <OutlinedInput
          error={!!(formik.errors[name] && formik.touched[name])}
          id={id}
          name={name}
          style={{
            background: '#F7FAFC',
          }}
          type={type ? type : 'text'}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          startAdornment={
            <InputAdornment position="start">
              <Icon />
            </InputAdornment>
          }
        />
      </FormControl>
      {formik.errors[name] && formik.touched[name] ? (
        <ErrorMessage label={formik.errors[name]} />
      ) : null}
    </InputWrapper>
  );
}

export default IconInput;
