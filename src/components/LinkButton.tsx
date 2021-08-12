import Link from 'next/link';
import React from 'react';
import { BigButton } from './BigButton';

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
        <BigButton title={title} onClick={onClick ?? (() => {})} />
      </a>
    </Link>
  );
};
