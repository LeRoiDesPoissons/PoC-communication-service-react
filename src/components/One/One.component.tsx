import { FC, MouseEventHandler } from 'react';
import useComm from '@hooks/useComm';

export const One: FC = () => {
  const { updateValue } = useComm();

  const clickHandler: MouseEventHandler<HTMLButtonElement> = e => {
    e.preventDefault();

    updateValue('component 1');
  };

  return <button onClick={clickHandler}>Set value to 'component 1'</button>;
};
