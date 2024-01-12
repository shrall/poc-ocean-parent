import dynamic from 'next/dynamic';
import { useEffect } from 'react';

import Header from '@/components/layout/header';
import Layout from '@/components/layout/layout';
import Seo from '@/components/seo';

const Index = dynamic(() => import('ocean_home/index'), { ssr: false });

export default function Home() {
  useEffect(() => {
    localStorage.setItem('token', '1234567890');
  }, []);

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
