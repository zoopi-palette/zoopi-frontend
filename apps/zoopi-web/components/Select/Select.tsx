import { ChangeEventHandler, ReactNode } from 'react';

export type SelectProps = {
  children?: ReactNode;
  id: string;
  name: string;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
};

export const Select = ({
  children,
  id,
  name,
  onChange,
  ...rest
}: SelectProps) => (
  <div
    css={{
      borderWidth: 1,
      borderStyle: 'solid',
      borderRadius: '22px',
      borderColor: '#E6E7E9',
      paddingTop: 12,
      paddingRight: 11,
      paddingBottom: 13,
      paddingLeft: 12,
      marginLeft: 8,
      marginRight: 8,
    }}
  >
    <select
      id={id}
      onChange={onChange}
      {...rest}
      css={{ border: 0, color: '#393939', fontSize: 13, paddingRight: 4 }}
    >
      {children}
      <option value=''>{name}</option>
    </select>
  </div>
);
