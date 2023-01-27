import React, { PropsWithChildren } from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import {
  ButtonProps,
  Link as MuiLink,
  LinkProps as MuiLinkProps,
} from '@mui/material';
import Router from 'next/router';

export interface LinkProps {
  href: string;
  mui?: MuiLinkProps | ButtonProps;
  Component?: React.ElementType;
  next?: NextLinkProps;
}

const Link: React.FC<PropsWithChildren<LinkProps>> = ({
  children,
  href,
  mui,
  Component = MuiLink,
  next,
  ...props
}) => {
  const isNextEnv = Boolean(Router.router);
  return isNextEnv ? (
    <NextLink href={href} passHref {...next}>
      <Component {...mui} {...props}>
        {children}
      </Component>
    </NextLink>
  ) : (
    <Component href={href} {...mui} {...props}>
      {children}
    </Component>
  );
};

export default Link;
