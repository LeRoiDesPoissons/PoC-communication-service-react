import { FC } from 'react';
import useComm from '@hooks/useComm';

export const Display: FC = () => {
  const { value } = useComm();

  return <div>{value}</div>;
};
