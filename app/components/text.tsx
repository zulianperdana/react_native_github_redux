import * as React from 'react';
import {Text as RNText} from 'react-native-elements';
import {translate} from '@app/i18n';

interface TextProps {
  tx?: string;
  text?: string;
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  style?: any;
  children?: React.ReactNode;
}
// base text component that support translation
export function Text(props: TextProps) {
  // grab the props
  const {tx, text, children, ...rest} = props;

  // figure out which content to use
  const i18nText = tx && translate(tx);
  const content = i18nText || text || children;

  return <RNText {...rest}>{content}</RNText>;
}
