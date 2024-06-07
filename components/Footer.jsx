import { AiFillCopyrightCircle } from 'react-icons/ai';
import { MdMail } from 'react-icons/md';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { DETAILS } from '../constants/constants';

const Footer = () => {
  return (
    <div id='intro' className='mt-4 mb-10 lg:mb-0'>
      <div className='flex h-10 items-center justify-between text-xs font-normal text-LightGray py-4 px-2 md:px-4 w-full bg-MidNightBlack'>
        <div className='flex items-center'>
          <div className='mr-1 text-base'>
            <AiFillCopyrightCircle />
          </div>
          <span>2023 All Rights Reserved.</span>
        </div>
        <div className='flex items-center'>
          Made by &nbsp;{' '}
          <span className='font-bold'>{DETAILS.first_name} </span>
        </div>
        <div className='hidden md:flex items-center'>
          <div className='mr-1 text-base'>
            <MdMail />
          </div>
          <a href={`mailto:${DETAILS.email}`} target='_blank' rel='noreferrer'>
            {DETAILS.email}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
