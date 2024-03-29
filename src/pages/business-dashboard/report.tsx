import Header from '@/components/layout/header';
import Layout from '@/components/layout/layout';
import Seo from '@/components/seo';

export default function Report() {
  return (
    <Layout>
      <Seo
        templateTitle='Business Dashboard - Report'
        siteName='Ocean by BCA'
      />
      <Header title='Report' />
    </Layout>
  );
}
