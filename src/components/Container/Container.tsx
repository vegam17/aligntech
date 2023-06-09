import { ReactElement } from 'react';
import classnames from 'classnames';

interface Props {
  classes?: string;
  children: ReactElement[] | ReactElement | string;
}

export default function Container({ classes, children }: Props) {
  return <div className={classnames('container', classes)}>{children}</div>;
}
