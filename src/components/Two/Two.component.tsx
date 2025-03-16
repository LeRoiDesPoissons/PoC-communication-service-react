import { FC, MouseEventHandler } from 'react';
import useComm from '@hooks/useComm';

export const Two: FC = () => {
  const { updateValue } = useComm();

  const clickHandler: MouseEventHandler<HTMLButtonElement> = e => {
    e.preventDefault();

    updateValue('component 2');
  };

  return <button onClick={clickHandler}>Set value to 'component 2'</button>;
};
