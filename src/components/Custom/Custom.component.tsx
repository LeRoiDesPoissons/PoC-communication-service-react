import { ChangeEventHandler, FC } from 'react';
import useComm from '@hooks/useComm';

export const Custom: FC = () => {
  const { value, updateValue } = useComm();

  const changeHandler: ChangeEventHandler<HTMLInputElement> = e => {
    updateValue(e.currentTarget.value);
  };

  return (
    <input
      placeholder="set custom value"
      type="text"
      value={value}
      onChange={changeHandler}
    />
  );
};
