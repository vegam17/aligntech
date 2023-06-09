import styles from './Card.module.scss';
import getIcon from '../../utils/getIcon';

interface Props {
  icon?: string;
  heading: string;
  description?: string;
  details: string[];
}

export default function Card({ icon, heading, description, details }: Props) {
  return (
    <div className={styles.card}>
      {icon && getIcon(icon)}
      <h3>{heading}</h3>
      <p>{description}</p>
      {details.length > 0 && (
        <ul>
          {details.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
