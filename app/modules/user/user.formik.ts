import {string, object} from 'yup';
import {translate} from '@app/i18n/translate';

export const userLoginValidationSchema = object({
  username: string()
    .matches(
      /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i,
      translate('login.username_validation_3'),
    )
    .required(translate('common.required')),
});

export const userLoginInitialValues = {
  username: '',
};

export const userPasswordValidationSchema = object({
  password: string()
    .min(8, translate('login.password_validation_2'))
    .required(translate('common.required')),
});

export const userPasswordInitialValues = {
  password: '',
};
