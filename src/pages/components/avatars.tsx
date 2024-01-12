import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

function Avatars() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Avatars</CardTitle>
      </CardHeader>
      <CardContent className='grid grid-cols-2 gap-x-2 gap-y-4'>
        <div className='flex items-center gap-2'>
          <Avatar className='size-16'>
            <AvatarImage src='https://github.com/shrall.png' />
            <AvatarFallback>MO</AvatarFallback>
          </Avatar>
          <Avatar className='size-16'>
            <AvatarImage src='https://github.com/shrall.pn' />
            <AvatarFallback>MO</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src='https://github.com/shrall.png' />
            <AvatarFallback>MO</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src='https://github.com/shrall.pn' />
            <AvatarFallback>MO</AvatarFallback>
          </Avatar>
        </div>
      </CardContent>
    </Card>
  );
}

export default Avatars;
