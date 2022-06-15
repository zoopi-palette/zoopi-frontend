import { useTheme } from '@emotion/react';
import React, { ReactNode } from 'react';

export type HospitalItemProps = {
  children?: ReactNode;
  name: string;
  address: string;
  divider: boolean;
  isSelected: boolean;
  onClick?: () => void;
};

export const HospitalItem = ({
  children,
  name,
  address,
  divider,
  isSelected,
  onClick,
  ...rest
}: HospitalItemProps) => {
  const theme = useTheme();

  return (
    <li
      {...rest}
      css={{
        listStyle: 'none',
        width: '100%',
      }}
    >
      <button
        css={{
          display: 'inline-flex',
          flexDirection: 'column',
          width: '100%',
          paddingTop: 26,
          paddingBottom: 24,
          paddingLeft: 23.52,
          gap: 1,
          background: isSelected ? '#F5F5F7' : theme.colors.white,
          borderStyle: 'solid',
          borderWidth: 0,
          borderBottomWidth: divider ? 1 : 0,
          borderColor: divider ? theme.colors['grey-40'] : 'transparent',
        }}
      >
        <span
          css={{
            fontWeight: 'bold',
            fontSize: '1.375rem',
            color: theme.colors['grey-90'],
          }}
        >
          {name}
        </span>
        <span
          css={{
            fontSize: '1rem',
            color: theme.colors['grey-60'],
          }}
        >
          {address}
        </span>
      </button>
      {children}
    </li>
  );
};
