import { BoundedProps } from '@/lib/types';
import clsx from 'clsx';

const Bounded = ({
  children,
  className,
  as: Comp = 'section',
}: BoundedProps) => {
  return (
    <Comp className={clsx('p-5 md:p-8 space-y-5 md:space-y-10', className)}>
      {children}
    </Comp>
  );
};

export default Bounded;
