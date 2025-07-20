import { TitleProps } from '@/lib/types';
import clsx from 'clsx';
import React from 'react';

const Title = ({ children, as: Comp = 'h1', className }: TitleProps) => {
  return <Comp className={clsx('text-balance', className)}>{children}</Comp>;
};

export default Title;
