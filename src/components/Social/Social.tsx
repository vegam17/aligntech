import getIcon from '../../utils/getIcon';
import { TSocial } from '../../types';
import data from '../../data';
import style from './Social.module.scss';

export default function Social() {
  const social: TSocial[] = data.social;
  if (social.length === 0) return null;
  return (
    <ul className={style.social}>
      {social.map(({ slug, url }) => (
        <li key={slug}>
          <a href={url} target="_blank" rel="noreferrer">
            {getIcon(slug)}
          </a>
        </li>
      ))}
    </ul>
  );
}
