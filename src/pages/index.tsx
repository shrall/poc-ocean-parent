import Header from '@/components/layout/header';
import Layout from '@/components/layout/layout';
import Seo from '@/components/seo';

export default function Home() {
  return (
    <Layout>
      <Seo templateTitle='Home' siteName='Ocean by BCA' />
      <Header title='Home' />
    </Layout>
  );
}
