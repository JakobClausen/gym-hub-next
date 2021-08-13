import Link from 'next/link';
import React, { ButtonHTMLAttributes } from 'react';
import { Button } from '../styles/styledComponents/buttons';

interface LinkButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href: string;
  as: string;
}

export const LinkButton: React.FC<LinkButtonProps> = ({
  href,
  as,
  onClick,
  children,
  ...rest
}) => {
  return (
    <Link as={as} href={href}>
      <a style={{ width: '100%' }}>
        <Button {...rest}>{children}</Button>
      </a>
    </Link>
  );
};
