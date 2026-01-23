import styles from './styles.module.css';
import type React from 'react';
import { RouterLink } from '../RouterLink';

type FooterProps = {
  icon: React.ReactNode;
};

export function Footer({ icon }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <RouterLink href='/about-pomodoro/'>
        Entenda como funciona a técnica pomodoro
      </RouterLink>
      <RouterLink href='/'>
        Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com {icon}
      </RouterLink>
    </footer>
  );
}
