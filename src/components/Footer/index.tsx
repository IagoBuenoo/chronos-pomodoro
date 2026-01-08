import styles from './styles.module.css';
import type React from 'react';

type FooterProps = {
  icon: React.ReactNode;
};

export function Footer({ icon }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <a href=''>Entenda como funciona a técnica pomodoro</a>
      <a href=''>
        Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com {icon}
      </a>
    </footer>
  );
}
