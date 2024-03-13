
import { Metadata } from 'next';
import { Editor } from '../ui/Editor';

export const metadata: Metadata = {
  title: 'dev',
};

export default function Page() {
  return (
    <div className='px-4 md:px-8 lg:px-12'>
      <h2 className='my-5 text-2xl font-bold text-left text-gray-800'>Rich Text Editor</h2>
      <p className='my-5 text-gray-600'>
        Try to building Rich Text Editor with Lexical
      </p>
      <Editor />
    </div>
  );
}
