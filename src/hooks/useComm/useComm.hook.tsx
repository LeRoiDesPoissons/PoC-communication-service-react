import CommService from '@services/comm';
import { useEffect, useRef, useState } from 'react';

const service = CommService;

export const useComm = () => {
  const [value, setValue] = useState(service.channel1);

  const updateValue = (s: string) => {
    service.channel1 = s;
  };

  const subscription = useRef(CommService.addSubscriber(setValue));

  useEffect(() => {
    const sub = subscription.current;
    return () => {
      CommService.removeSubscriber(sub);
    };
  });

  return {
    value,
    updateValue,
  };
};
