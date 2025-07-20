import Bounded from '@/components/Bounded';
import Divider from '@/components/Divider';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <Bounded>
      <h1>Hello Next.js!</h1>
      <Divider />
      <Button>Click</Button>
    </Bounded>
  );
}
