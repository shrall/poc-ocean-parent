import dynamic from 'next/dynamic';
import { useEffect } from 'react';

import Header from '@/components/layout/header';
import Layout from '@/components/layout/layout';
import Seo from '@/components/seo';

import { useTokenStore } from '@/store/useTokenStore';

const Index = dynamic(() => import('ocean_home/index'), { ssr: false });

export default function Home() {
  const { token, setToken } = useTokenStore();

  useEffect(() => {
    //NOTE - Localstorage
    const randomNumber = Math.floor(Math.random() * 1000000000);
    if (localStorage.getItem('token') === '') {
      localStorage.setItem('token', `${randomNumber}-localstorage`);
    }
    //NOTE - Zustand
    if (token === '') {
      setToken(`${randomNumber}-zustand`);
    }
  }, [setToken, token]);

  return (
    <Layout>
      <Seo templateTitle='Home' siteName='Ocean by BCA' />
      <div className='w-full'>
        <Header title='Home' />
        <Index />
      </div>
    </Layout>
  );
}
