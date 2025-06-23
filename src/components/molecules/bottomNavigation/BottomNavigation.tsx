'use client';

import AlarmActiveIcon from '@/assets/wed_icon/icon_28/alarm_active.svg';
import AlarmDefaultIcon from '@/assets/wed_icon/icon_28/alarm_default.svg';
import { usePathname, useRouter } from 'next/navigation';
import React, { useCallback } from 'react';

type NavItem = {
  label: string;
  defaultIcon: React.ReactNode;
  activeIcon: React.ReactNode;
  href: string;
};

const NAV_ITEMS: NavItem[] = [
  {
    label: '홈',
    defaultIcon: <AlarmDefaultIcon />,
    activeIcon: <AlarmActiveIcon />,
    href: '/home',
  },
  {
    label: '리스트',
    defaultIcon: <AlarmDefaultIcon />,
    activeIcon: <AlarmActiveIcon />,
    href: '/list',
  },
  {
    label: '달력',
    defaultIcon: <AlarmDefaultIcon />,
    activeIcon: <AlarmActiveIcon />,
    href: '/calendar',
  },
  {
    label: '마이',
    defaultIcon: <AlarmDefaultIcon />,
    activeIcon: <AlarmActiveIcon />,
    href: '/my',
  },
];

export const BottomNavigation = () => {
  const pathname = usePathname();
  const router = useRouter();

  const isActive = useCallback(
    (href: string) => pathname.startsWith(href),
    [pathname],
  );

  return (
    <nav className='mt-auto rounded-t-[20px] border-t border-gray-300 bg-black/40 px-6 py-3'>
      <ul className='flex justify-between'>
        {NAV_ITEMS.map((item) => {
          const active = isActive(item.href);
          return (
            <li
              key={item.label}
              onClick={() => router.push(item.href)}
              className='flex flex-1 cursor-pointer flex-col items-center gap-1'
            >
              {active ? item.activeIcon : item.defaultIcon}
              <span
                className={`text-xs text-white ${active ? 'opacity-100' : 'opacity-30'}`}
              >
                {item.label}
              </span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default BottomNavigation;
