import { useTheme } from '@emotion/react';
import { Css } from '@web/styles/theme';
import React, { useMemo, MouseEventHandler } from 'react';
import Image from 'next/image';
import ExDog from '../../assets/image/ex-dog-animalchip.png';

export type Dog = {
  type: 'dog';
  bloodType: ['DEA1-', 'DEA1.1'];
};

export type Cat = {
  type: 'cat';
  bloodType: ['A'];
};

export type AnimalChipProps = (Dog | Cat) & {
  name: string;
  image?: string;
  isSelected: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const AnimalChip = ({
  type,
  bloodType,
  name,
  image,
  isSelected,
  onClick,
  ...rest
}: AnimalChipProps) => {
  const theme = useTheme();

  const css: Css = useMemo(() => {
    return {
      width: 219,
      height: 72,
      borderRadius: 12,
      borderWidth: isSelected ? 2 : 1,
      borderStyle: 'solid',
      borderColor: isSelected ? theme.colors.sub : '#E8EBF0',
      background: theme.colors.white,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      padding: 12,
      gap: 12,
    };
  }, [theme, isSelected]);

  return (
    <button onClick={onClick} css={css} {...rest}>
      {image && <Image width={48} height={48} alt="animal-image" src={ExDog} />}
      {!image && (
        <div
          css={{
            width: '48px',
            height: '48px',
            background: '#D9D9D9',
            borderRadius: '50%',
          }}
        ></div>
      )}
      <div
        css={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: 2,
        }}
      >
        <div
          css={{
            display: 'flex',
            alignItems: 'center',
            gap: 4,
          }}
        >
          <span
            css={{
              fontWeight: 'bold',
              color: '#1A1E27',
              fontSize: '1.125rem',
            }}
          >
            {name}
          </span>
          <span
            css={{
              background: 'rgba(255, 62, 61, 0.12)',
              color: theme.colors.main,
              fontSize: '0.625rem',
              padding: 4,
              borderRadius: 4,
            }}
          >
            {type === 'dog' ? '강아지' : '고양이'}
          </span>
        </div>
        <div
          css={{
            display: 'flex',
            gap: 5,
          }}
        >
          {bloodType.map((blood: string) => (
            <span
              key={blood}
              css={{
                color: '#8E95A3',
                fontSize: '0.875rem',
              }}
            >
              {blood}
            </span>
          ))}
        </div>
      </div>
    </button>
  );
};
