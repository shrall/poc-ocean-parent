import { Avatar } from '@radix-ui/react-avatar';

import { AvatarFallback, AvatarImage } from '../ui/avatar';
import Icon from '../ui/icon';

function Header({ title }: { title: string }) {
  return (
    <div className=' w-full bg-ocean-light-20'>
      <div className='flex h-auto items-center justify-between bg-ocean-light-10 p-6 drop-shadow-sm'>
        <div className='text-2xl font-semibold'>{title}</div>
        <div className='flex items-center gap-x-6'>
          <Icon icon='notification' fill='ocean-primary-30' />
          <Avatar className='size-12'>
            <AvatarImage
              className='rounded-full'
              src='https://github.com/shrall.png'
            />
            <AvatarFallback>MO</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
}

export default Header;
