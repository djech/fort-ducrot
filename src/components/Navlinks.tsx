import Link from 'next/link';

const Navlinks = () => {
  return (
    <>
      <li className='mr-2'>
        <Link href='/association'>L'association</Link>
      </li>
      <li className='mr-2'>
        <Link href='/contact'>Contact</Link>
      </li>
    </>
  );
};

export default Navlinks;
