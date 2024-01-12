import Header from '@/components/layout/header';
import Layout from '@/components/layout/layout';
import Seo from '@/components/seo';

export default function Overview() {
  return (
    <Layout>
      <Seo
        templateTitle='Business Dashboard - Overview'
        siteName='Ocean by BCA'
      />
      <Header title='Overview' />
    </Layout>
  );
}
