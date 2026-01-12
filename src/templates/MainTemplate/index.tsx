import { HeartIcon } from 'lucide-react';

import { Container } from '../../components/Container';
import { Footer } from '../../components/Footer';
import { Logo } from '../../components/Logo';
import { Menu } from '../../components/Menu';
import type React from 'react';

type MainTemplateProps = {
  children: React.ReactNode;
};

export function MainTemplate({ children }: MainTemplateProps) {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>

      {children}

      <Container>
        <Footer icon={<HeartIcon />} />
      </Container>
    </>
  );
}
