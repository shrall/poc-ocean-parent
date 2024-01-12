import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

import Seo from '@/components/seo';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import Avatars from './avatars';
import Badges from './badges';
import Buttons from './buttons';
import Skeletons from './skeletons';

export default function Components() {
  return (
    <main className='flex min-h-screen w-screen flex-col gap-4 px-32 py-12'>
      <Seo templateTitle='Components' siteName='Ocean Starter Template' />
      <Link href='/'>
        <Button variant='link' className='mr-auto'>
          <ArrowLeft className='mr-2 size-5' /> Go Back
        </Button>
      </Link>
      <Card>
        <CardHeader>
          <CardTitle>Components</CardTitle>
          <CardDescription>
            A list of components that are used in Ocean.
          </CardDescription>
        </CardHeader>
      </Card>
      {/* //NOTE - Avatars */}
      <Avatars />
      {/* //NOTE - Badges */}
      <Badges />
      {/* //NOTE - Buttons */}
      <Buttons />
      {/* //NOTE - Skeletons */}
      <Skeletons />
    </main>
  );
}
