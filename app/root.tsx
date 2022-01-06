import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  Link,
} from 'remix';
import type { MetaFunction } from 'remix';
import styles from './tailwind.css';
import { Header } from './shared/header/header';
import { useEffect, useState } from 'react';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export const meta: MetaFunction = () => {
  return { title: "Brian Hudi's programming blog and website." };
};

export default function App() {
  // TODO: Look at kentcdodds website and understand how to darkmode and store in the browser with remix.run
  const [darkMode, setDarkMode] = useState(false);

  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <body className='dark:bg-gray-dark dark:text-white'>
        <div className='px-[6vw] py-9 lg:py-12'>
          <Header darkMode>
            <Link className='p-1 m-2' to=''>
              Home
            </Link>
            <Link className='p-1 m-2' to='/posts'>
              Posts
            </Link>
          </Header>
        </div>
        <div className='mx-[12vw]'>
          <Outlet />
        </div>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  );
}
