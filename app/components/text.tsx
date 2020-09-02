import * as React from 'react';
import {Text as RNText} from 'react-native';
import {translate} from '@app/i18n';

interface TextProps {
  tx?: string;
  text?: string;
  category: string;
  children?: React.ReactNode;
}
export function Text(props: TextProps) {
  // grab the props
  const {tx, text, category, children} = props;

  // figure out which content to use
  const i18nText = tx && translate(tx);
  const content = i18nText || text || children;

  return <RNText>{content}</RNText>;
}
