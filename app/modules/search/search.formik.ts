import Yup from 'yup';
import {translate} from '@app/i18n/translate';

export const searchRepositoryValidationSchema = Yup.object({
  repository: Yup.string().required(translate('common.required')),
});

export const searchRepositoryInitialValues = {
  repository: 'facebook/react-native',
};
