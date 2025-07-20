'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const NAV_LINKS = [
  { title: 'Blog', url: '/blogs' },
  {
    title: 'Projects',
    url: '/projects',
  },
  {
    title: 'Certificate',
    url: '/certificate',
  },
  {
    title: 'Contact',
    url: '/contact',
  },
];

const Header = () => {
  const pathname = usePathname();
  const [navOpen, setNavOpen] = useState<boolean>(false);

  useEffect(() => {
    document.body.style.overflow = navOpen ? 'hidden' : '';
  }, [navOpen]);

  return <header></header>;
};

export default Header;
