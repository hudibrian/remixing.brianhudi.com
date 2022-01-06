import { FC, ReactElement } from 'react';
import { Link } from 'remix';

interface Props {
  children: ReactElement[];
}

export const Header: FC<Props> = ({ children }) => {
  return (
    <nav className='flex flex-row items-center'>
      <section className='place-content-start' role='heading'>
        <Link to=''>
          <h1 className='mt-0 mb-0 font-bold text-xl'>Brian Hudi</h1>
        </Link>
      </section>
      <section className='ml-auto' role='heading'>
        {children}
      </section>
    </nav>
  );
};
