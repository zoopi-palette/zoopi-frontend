import { useTheme } from '@emotion/react';
import {
  ChangeEvent,
  ChangeEventHandler,
  FocusEventHandler,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from 'react';
import { Icon } from '@web/components/Icon';
import { Css, CssObject } from '@web/styles/theme';

export type TextInputProps = {
  children?: ReactNode;
  value?: string;
  placeholder?: string;
  onChange?: (value: string, event?: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  label?: string | null;
  type?: 'email' | 'password' | 'text';
  underline?: boolean;
  clearDisabled?: boolean;
  right?: ReactNode;
};

export const TextInput = ({
  children,
  onChange,
  onBlur,
  onFocus,
  value,
  placeholder,
  label,
  underline = true,
  clearDisabled = false,
  right,
  type = 'text',
  ...rest
}: TextInputProps) => {
  const theme = useTheme();

  const [localValue, setLocalValue] = useState('');

  const css: Css = useMemo(() => {
    return {
      fontSize: '1rem',
      color: theme.colors['grey-90'],
      borderWidth: underline ? 1 : 0,
      borderBottomStyle: 'solid',
      borderColor: theme.colors['grey-40'],
      paddingBottom: '6px',
      '::placeholder': {
        padding: 0,
        color: theme.colors['grey-40'],
      },
      ':focus': {
        borderColor: theme.colors['grey-90'],
      },
    } as CssObject;
  }, [theme]);

  const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      setLocalValue(event.currentTarget.value);
      onChange?.(event.currentTarget.value, event);
    },
    [onChange]
  );

  const handleBlur: FocusEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      onBlur?.(event);
    },
    [onBlur]
  );

  const handleFocus: FocusEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      onFocus?.(event);
    },
    [onFocus]
  );

  const handleClearClick = useCallback(() => {
    setLocalValue('');
    onChange?.('');
  }, [onChange]);

  return (
    <label
      css={{
        display: 'inline-flex',
        flexDirection: 'column',
        width: '100%',
        position: 'relative',
      }}
    >
      {label && (
        <span
          css={(theme) => ({
            fontSize: '0.875rem',
            color: theme.colors['grey-50'],
            marginBottom: '7px',
          })}
        >
          {label}
        </span>
      )}
      <input
        type={type}
        {...rest}
        value={value || localValue}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        css={css}
      />
      <div css={{ position: 'absolute', right: 0, bottom: 6 }}>
        {right}
        {clearDisabled ? null : (
          <button
            onClick={handleClearClick}
            css={{
              display: value || localValue ? 'inline-flex' : 'none',
              cursor: 'pointer',
              paddingRight: 2,
              paddingLeft: 2,
            }}
          >
            <Icon name={'close-circle'} color={theme.colors['grey-50']} />
          </button>
        )}
      </div>
    </label>
  );
};
