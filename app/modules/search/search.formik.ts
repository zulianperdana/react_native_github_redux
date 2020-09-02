import {string, object} from 'yup';
import {translate} from '@app/i18n/translate';

export const searchRepositoryValidationSchema = object({
  repository: string().required(translate('common.required')),
});

export const searchRepositoryInitialValues = {
  repository: 'facebook/react-native',
};
