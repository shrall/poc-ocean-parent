declare module 'ocean_home/index' {
  import { FC } from 'react';

  interface HomeProps {
    cookiesToken: string | undefined;
  }

  const Home: FC<HomeProps>;
  export default Home;
}
