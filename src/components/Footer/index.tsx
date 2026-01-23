import { Link } from 'react-router';
import styles from './styles.module.css';
import type React from 'react';

type FooterProps = {
  icon: React.ReactNode;
};

export function Footer({ icon }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <Link to='/about-pomodoro/'>
        Entenda como funciona a técnica pomodoro
      </Link>
      <Link to='/'>
        Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com {icon}
      </Link>
    </footer>
  );
}
