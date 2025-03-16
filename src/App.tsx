import { FC } from 'react';
import One from '@components/One';
import Two from '@components/Two';
import Custom from '@components/Custom';
import Display from '@components/Display';

import 'normalize.css';
import './app.module.scss';

export const App: FC = () => {
  return (
    <main>
      <section>
        <Display />
      </section>
      <section>
        <One />
        <Two />
        <Custom />
      </section>
    </main>
  );
};
