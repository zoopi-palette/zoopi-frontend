import { useTheme } from '@emotion/react';
import Image from 'next/image';
import { useMemo, MouseEventHandler } from 'react';
import { Css } from '@web/styles/theme';

export type Dog = {
  animalType: 'dog';
  bloodType: ['DEA1-', 'DEA1.1'];
};

export type Cat = {
  animalType: 'cat';
  bloodType: ['A'];
};

export type AnimalChipProps = (Dog | Cat) & {
  animalName: string;
  avatar?: string;
  disabled?: boolean;
  isSelected: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const AnimalChip = ({
  animalType,
  bloodType,
  animalName,
  avatar,
  disabled = false,
  isSelected,
  onClick,
  ...rest
}: AnimalChipProps) => {
  const theme = useTheme();

  const css: Css = useMemo(() => {
    const disabledCss: Css = {
      ...(disabled
        ? {
            cursor: 'default',
          }
        : {
            outlineWidth: isSelected ? 2 : 1,
            outlineColor: isSelected
              ? theme.colors.sub
              : theme.colors['grey-30'],
          }),
    };

    return {
      width: 219,
      height: 72,
      borderRadius: 12,
      background: theme.colors.white,
      display: 'flex',
      alignItems: 'center',
      padding: 12,
      gap: 12,
      outlineStyle: 'solid',
      outlineWidth: 1,
      outlineColor: theme.colors['grey-30'],
      ...disabledCss,
    };
  }, [disabled, isSelected, theme]);

  return (
    <button type="button" onClick={onClick} css={css} {...rest}>
      {avatar && (
        <Image width={48} height={48} alt="반려동물의 사진" src={avatar} />
      )}
      {!avatar && (
        <div
          css={{
            width: '48px',
            height: '48px',
            background: '#D9D9D9',
            borderRadius: '50%',
          }}
        />
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
              color: theme.colors['grey-90'],
              fontSize: '1.125rem',
            }}
          >
            {animalName}
          </span>
          <span
            css={{
              background: theme.colors.sub,
              color: theme.colors['grey-10'],
              fontSize: '0.625rem',
              padding: 4,
              borderRadius: 4,
            }}
          >
            {animalType === 'dog' ? '강아지' : '고양이'}
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
                color: theme.colors['grey-60'],
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
