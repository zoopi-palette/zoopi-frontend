import {useTheme} from "@emotion/react";
import {
  ReactNode,
  ChangeEvent,
  ChangeEventHandler,
  useMemo,
  useCallback,
  useState,
} from "react";
import {Icon} from "@web/components/Icon";
import {Css} from "@web/styles/theme";

export type SearchBarProps = {
  value: string;
  placeholder?: string;
  onChange?: (value?: string, event?: ChangeEvent<HTMLInputElement>) => void;
  clearDisabled?: boolean;
  left: ReactNode;
  right: ReactNode;
};

export const SearchBar = ({
  onChange,
  value,
  placeholder,
  clearDisabled = false,
  left,
  right,
  ...rest
}: SearchBarProps) => {
  const theme = useTheme();

  const [localValue, setLocalValue] = useState("");

  const css: Css = useMemo(() => {
    return {
      paddingTop: 15,
      paddingBottom: 15,
      paddingLeft: 50,
      borderWidth: 1,
      borderStyle: "solid",
      borderColor: "#D8DCE2",
      borderRadius: 12,
      fontSize: "1.125rem",

      ":focus": {
        borderWidth: 2,
        borderColor: theme.colors.sub,
      },
    };
  }, [theme]);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setLocalValue(event.currentTarget.value);
    onChange?.(event.currentTarget.value, event);
  };

  const handleClearClick = useCallback(() => {
    setLocalValue("");
    onChange?.("");
  }, [onChange]);

  return (
    <div
      css={{
        display: "inline-flex",
        flexDirection: "column",
        width: "100%",
        position: "relative",
      }}
    >
      <input
        placeholder={placeholder}
        value={value || localValue}
        onChange={handleChange}
        css={css}
        {...rest}
      />
      <div css={{position: "absolute", left: 14, top: 14}}>
        {right}
        {clearDisabled ? null : (
          <button
            onClick={handleClearClick}
            css={{
              display: "inline-flex",
            }}
          >
            <Icon name={"search"} color={theme.colors["grey-50"]} size={24} />
          </button>
        )}
      </div>
      <div css={{position: "absolute", right: 21.86, top: 14}}>
        {right}
        {clearDisabled ? null : (
          <button
            onClick={handleClearClick}
            css={{
              display: value || localValue ? "inline-flex" : "none",
              cursor: "pointer",
              paddingRight: 2,
              paddingLeft: 2,
            }}
          >
            <Icon name={"close-circle"} color={theme.colors["grey-50"]} />
          </button>
        )}
      </div>
    </div>
  );
};
