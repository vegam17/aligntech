import styles from './Icon.module.scss';

export default function EmailIcon() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.iconLink}
    >
      <circle cx="24" cy="24" r="24" />
      <path d="M14.25 15C13.0078 15 12 16.0078 12 17.25C12 17.9578 12.3328 18.6234 12.9 19.05L23.1 26.7C23.6344 27.0984 24.3656 27.0984 24.9 26.7L35.1 19.05C35.6672 18.6234 36 17.9578 36 17.25C36 16.0078 34.9922 15 33.75 15H14.25ZM12 20.25V30C12 31.6547 13.3453 33 15 33H33C34.6547 33 36 31.6547 36 30V20.25L25.8 27.9C24.7312 28.7016 23.2688 28.7016 22.2 27.9L12 20.25Z" />
    </svg>
  );
}
