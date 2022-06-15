import { useTheme } from '@emotion/react';
import { Hospital } from '@web/stores/data/types';
import { MouseEventHandler, ReactNode } from 'react';

export type HospitalItemProps = {
  children?: ReactNode;
  id: number;
  name: string;
  address: string;
  divider?: boolean;
  isSelected: boolean;
  handleSelectedHospital: (hospital: Hospital) => void;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const HospitalItem = ({
  children,
  id,
  name,
  address,
  divider = true,
  isSelected,
  handleSelectedHospital,
  onClick,
  ...rest
}: HospitalItemProps) => {
  const theme = useTheme();

  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    onClick?.(event);
    handleSelectedHospital({
      id,
      name,
      address,
    });
  };

  return (
    <li
      {...rest}
      css={{
        listStyle: 'none',
        width: '100%',
      }}
    >
      <button
        onClick={handleClick}
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
