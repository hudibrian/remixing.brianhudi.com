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
  return [
    { rel: 'stylesheet', href: styles },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500;600;700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Trykker&display=swap',
    },
  ];
}

export const meta: MetaFunction = () => {
  return { title: "Brian Hudi's programming blog and website." };
};

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <html lang='en' className={darkMode ? 'dark' : 'light'}>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <body className='dark:bg-gray-dark dark:text-white'>
        <div className='px-[6vw] py-9 lg:py-12'>
          <Header darkMode setDarkMode={setDarkMode}>
            <Link className='p-1 m-2' to=''>
              Home
            </Link>
            <Link className='p-1 m-2' to='/posts'>
              Posts
            </Link>
            <button onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? '🌑' : '☀️'}
              {/**
               * //TODO: use cookies to save theme && find better icons
               */}
            </button>
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
