import styles from './Icon.module.scss';

export default function PhoneIcon() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.iconLink}>
      <circle cx="24" cy="24" r="24" />
      <path d="M19.7293 13.1544C19.3684 12.2825 18.4169 11.8185 17.5076 12.0669L13.3828 13.1919C12.5672 13.4168 12 14.1574 12 15.0012C12 26.5975 21.4027 36.0002 32.9991 36.0002C33.8428 36.0002 34.5834 35.4331 34.8084 34.6175L35.9333 30.4927C36.1817 29.5833 35.7177 28.6318 34.8459 28.2709L30.3461 26.396C29.582 26.0772 28.6961 26.2975 28.1758 26.9397L26.2822 29.2505C22.9823 27.6897 20.3106 25.0179 18.7497 21.718L21.0605 19.8291C21.7027 19.3041 21.923 18.4229 21.6043 17.6588L19.7293 13.159V13.1544Z" />
    </svg>
  );
}