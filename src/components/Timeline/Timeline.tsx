import { TEvent } from '../../types';
import styles from './Timeline.module.scss';

interface Props {
  events: TEvent[];
}

export default function Timeline({ events }: Props) {
  const renderDate = (to = '', from = '') => {
    const formatDate = (date: string): string => {
      const dateParts = date.split('-');
      const year = parseInt(dateParts[0]);
      const month = parseInt(dateParts[1]) - 1;
      const day = parseInt(dateParts[2]);

      const formattedDate = new Date(year, month, day).toLocaleString('en-US', {
        month: 'short',
        year: 'numeric'
      });
      return formattedDate;
    };
    const markup = (date: string) => (
      <time dateTime={date} className={styles.date}>
        {formatDate(date)}
      </time>
    );

    if (to && from)
      return (
        <>
          {markup(from)} - {markup(to)}
        </>
      );

    return to ? markup(to) : markup(from);
  };

  return (
    <ol className={styles.timeline}>
      {events.map(({ date, heading, subheading, details }: TEvent) => (
        <li key={heading}>
          <div className={styles.line}></div>
          <div className={styles.header}>
            <h3>
              {heading}{' '}
              {subheading && <span className="em">@ {subheading}</span>}
            </h3>
            <span className="em">{renderDate(date.to, date.from)}</span>
          </div>
          {details && details.length > 0 && (
            <ul>
              {details?.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ol>
  );
}
