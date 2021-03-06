import { useFormik } from 'formik';
import React, { useContext } from 'react';
import * as Yup from 'yup';
import IconInput from '../../components/icon-input';
import Layout from '../../components/layout';
import PageTitle from '../../components/page-title';
import { Wrapper } from './style';
import { BsFillPersonFill } from 'react-icons/bs';
import { FaBirthdayCake } from 'react-icons/fa';
import { BiIdCard } from 'react-icons/bi';
import CPFInput from '../../components/cpf-input';
import PhoneInput, { phoneRegex } from '../../components/phone-input';
import { ImPhone } from 'react-icons/im';
import { PurchaseContext } from '../../context/purchase/PurchaseContext';

export interface FormikValues {
  name: string;
  email: string;
  birthDate: string;
  cpf: string;
  phoneNumber: string;
}

const Concluir: React.FC = () => {
  const { plan, platform } = useContext(PurchaseContext);

  const formik = useFormik<FormikValues>({
    initialValues: {
      name: '',
      email: '',
      birthDate: '',
      cpf: '',
      phoneNumber: '',
    },
    validationSchema: Yup.object().shape({
      name: Yup.string()
        .min(3, 'Nome muito curto')
        .required('Campo obrigatório'),
      email: Yup.string().email('Email inválido').required('Campo obrigatório'),
      birthDate: Yup.string()
        .max(10, 'Data inválida')
        .required('Campo obrigatório'),
      cpf: Yup.string()
        .test('len', 'CPF Inválido.', (val) => {
          return val?.trim().length === 14;
        })
        .required('Campo obrigatório'),
      phoneNumber: Yup.string()
        .matches(phoneRegex, 'Número de telefone inválido')
        .required('Campo obrigatório'),
    }),
    onSubmit: (values) => {
      console.log(
        'Plataforma selecionada: ',
        JSON.stringify(platform, undefined, 2)
      );
      console.log('Plano selecionado: ', JSON.stringify(plan, undefined, 2));
      console.log(
        'Valores do formulário: ',
        JSON.stringify(values, undefined, 2)
      );
    },
  });

  return (
    <Layout bgImage="/form-background.svg">
      <Wrapper onSubmit={formik.handleSubmit}>
        <PageTitle text="Preencha os dados para concluir" />

        <IconInput
          id="name"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          placeholder="Nome"
          Icon={BsFillPersonFill}
          formik={formik}
        />

        <IconInput
          id="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          placeholder="E-mail"
          Icon={BsFillPersonFill}
          formik={formik}
        />

        <IconInput
          id="birthDate"
          name="birthDate"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.birthDate}
          placeholder="Data de aniversário"
          Icon={FaBirthdayCake}
          type="date"
          formik={formik}
        />

        <CPFInput
          id="cpf"
          name="cpf"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.cpf}
          placeholder="CPF"
          Icon={BiIdCard}
          formik={formik}
        />

        <PhoneInput
          id="phoneNumber"
          name="phoneNumber"
          value={formik.values.phoneNumber}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Telefone"
          Icon={ImPhone}
          formik={formik}
        />

        <button type="submit">Finalizar</button>
      </Wrapper>
    </Layout>
  );
};

export default Concluir;
