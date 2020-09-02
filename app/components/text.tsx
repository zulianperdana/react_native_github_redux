import * as React from 'react';
import {Text as RNText} from 'react-native-elements';
import {translate} from '@app/i18n';

interface TextProps {
  tx?: string;
  text?: string;
  category: string;
  children?: React.ReactNode;
}
export function Text(props: TextProps) {
  // grab the props
  const {tx, text, children, ...rest} = props;

  // figure out which content to use
  const i18nText = tx && translate(tx);
  const content = i18nText || text || children;

  return <RNText {...rest}>{content}</RNText>;
}
