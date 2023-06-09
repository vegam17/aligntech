import * as icons from '../icons';

export default function getIcon(slug: string) {
  switch (slug) {
    case 'linkedin':
      return <icons.LinkedInIcon />;
    case 'email':
      return <icons.EmailIcon />;
    case 'phone':
      return <icons.PhoneIcon />;
    case 'code':
      return <icons.CodeIcon />;
    case 'gear':
      return <icons.GearIcon />;
    case 'leadership':
      return <icons.LeadershipIcon />;
    default:
      return <></>;
  }
}
