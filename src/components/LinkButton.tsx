import Link from 'next/link';
import React from 'react';
import { Button } from '../styles/styledComponents/buttons';

interface LinkButtonProps {
  title: string;
  href: string;
  as: string;
  onClick?: () => void;
}

export const LinkButton: React.FC<LinkButtonProps> = ({
  title,
  href,
  as,
  onClick,
}) => {
  return (
    <Link as={as} href={href}>
      <a style={{ width: '100%' }}>
        <Button onClick={onClick ?? (() => {})}>{title}</Button>
      </a>
    </Link>
  );
};
