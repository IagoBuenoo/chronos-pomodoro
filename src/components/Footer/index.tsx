import styles from './styles.module.css';

type FooterProps = {
  icon: React.ReactNode;
};

export function Footer(props: FooterProps) {
  return (
    <footer className={styles.footer}>
      <a href=''>Entenda como funciona a técnica pomodoro</a>
      <a href=''>
        Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com
        {props.icon}
      </a>
    </footer>
  );
}
