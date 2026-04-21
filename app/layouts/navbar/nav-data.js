import config from '~/config.json';

export const navLinks = [
  {
    label: 'Projects',
    pathname: '/#project-1',
  },
  {
    label: 'About',
    pathname: '/#details',
  },
  {
    label: 'Uses',
    pathname: '/uses',
  },
  {
    label: 'Contact',
    pathname: '/contact',
  },
];

export const socialLinks = [
  {
    label: 'Resume',
    url: config.resume,
    icon: 'copy',
  },
  {
    label: 'LinkedIn',
    url: config.linkedin,
    icon: 'link',
  },
  {
    label: 'Portfolio Email',
    url: `mailto:${config.email}`,
    icon: 'send',
  },
  {
    label: 'Github',
    url: `https://github.com/${config.github}`,
    icon: 'github',
  },
];
