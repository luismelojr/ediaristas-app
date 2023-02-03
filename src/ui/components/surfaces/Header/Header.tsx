import React, { PropsWithChildren, useState } from 'react';
import {
  ButtonsContainer,
  HeaderAppBar,
  HeaderDrawer,
  HeaderLogo,
} from './Header.styles';
import {
  Container,
  Divider,
  IconButton,
  MenuItem,
  MenuList,
  Toolbar,
} from '@mui/material';
import Link from '../../navigation/Link/Link';
import RoundedButton from '../../inputs/RoundedButton/RoundedButton';
import useIsMobile from '../../../../data/hooks/useIsMobile';

export interface HeaderProps {}

const Header: React.FC<PropsWithChildren<HeaderProps>> = () => {
  const isMobile = useIsMobile();
  return isMobile ? <HeaderMobile /> : <HeaderDesktop />;
};

const HeaderDesktop: React.FC = () => {
  return (
    <HeaderAppBar>
      <Toolbar component={Container}>
        <Link href={'/'}>
          <HeaderLogo src={'/img/logos/logo.svg'} alt={'E-Diaristas'} />
        </Link>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <ButtonsContainer>
          <Link
            href={'/cadastro/diarista'}
            Component={RoundedButton}
            mui={{ variant: 'contained' }}
          >
            Seja um(a) diarista
          </Link>
          <Link href={'/login'}>Login</Link>
        </ButtonsContainer>
      </Toolbar>
    </HeaderAppBar>
  );
};

const HeaderMobile: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  return (
    <HeaderAppBar>
      <Toolbar component={Container}>
        <IconButton
          edge={'start'}
          color={'inherit'}
          onClick={() => setIsDrawerOpen(true)}
        >
          <i className={'twf-bars'} />
        </IconButton>
        <Link href={'/'}>
          <HeaderLogo src={'/img/logos/logo.svg'} alt={'E-Diaristas'} />
        </Link>
        <HeaderDrawer
          open={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          onClick={() => setIsDrawerOpen(false)}
        >
          <MenuList>
            <Link href={'/login'} Component={MenuItem}>
              Login
            </Link>
            <Divider />
            <Link href={'/cadastro/diarista'} Component={MenuItem}>
              Seja um(a) diarista
            </Link>
          </MenuList>
        </HeaderDrawer>
      </Toolbar>
    </HeaderAppBar>
  );
};

export default Header;
