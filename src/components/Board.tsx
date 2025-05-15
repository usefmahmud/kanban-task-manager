import { PlusIcon } from 'lucide-react';

interface BoardProps {
  title: string;
  color: string;
}

const Board = ({ title, color }: BoardProps) => {
  return (
    <div className='min-w-[300px] rounded-2xl border-4'>
      <div
        className='flex items-center justify-center rounded-t-[12px] border-b-4 py-2 text-2xl font-bold select-none'
        style={{
          backgroundColor: color,
        }}
      >
        {title.toUpperCase()}
      </div>

      <div className='px-4 py-5'>
        <div>{/* Cards List */}</div>

        <div className='flex cursor-pointer items-center justify-center rounded-lg border-3 py-1 text-xl font-bold'>
          <PlusIcon />
        </div>
      </div>
    </div>
  );
};

export default Board;
