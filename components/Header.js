/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

const Header = ({ width, height }) => {
  const year = new Date().getFullYear();
  const firstJob = 2018
  const exp = year - firstJob;

  return(
    <section className='container mx-auto dark:text-gray-300'>
      <div className='grid grid-cols-1 md:grid-cols-2 h-4/5'>
        <div className='col-span-1 flex mx-auto mt-10 md:mt-44'>
          <div className='left-content text-center md:text-left md:ml-10'>

            <h1 className='text-xl md:text-4xl'>Hello, I&apos;m Muhammad Athallah <u>Zhuhry</u></h1>
            <h3 className='text-base md:text-3xl my-3'>Software Engineer | Backend Developer</h3>
            <p className='text-sm md:text-lg tracking-widest leading-loose'>
              An individual who Love to Code & Write, <br />
              Eager to Learn new things and Share, <br />
              with over <b id="exp">{exp}</b> years experience.
            </p>

            <div className='socialmedia mt-4 text-3xl'>
              <Link href='https://github.com/muhammadzhuhry'>
                <a className='mr-4 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-500'>
                  <i className='fab fa-github github'></i>
                </a>
              </Link>
              <Link href='https://www.linkedin.com/in/muhammadzhuhry/'>
                <a className='mr-4 text-blue-500 hover:text-blue-800'>
                  <i className='fab fa-linkedin-in linkedin'></i>
                </a>
              </Link>
              <Link href='https://medium.com/@muhamadzhuhry'>
                <a className='mr-4 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-500'>
                  <i className='fab fa-medium medium'></i>
                </a>
              </Link>
              <Link href='#'>
                <a className='mr-4 text-pink-700 hover:text-pink-900'>
                  <i className='fab fa-instagram instagram'></i>
                </a>
              </Link>
            </div>

          </div>
        </div>

        <div className='col-span-1 order-first md:order-last'>
          <img src='img/perfil.png' alt='profile' width={width} height={height} />
        </div>
      </div>
    </section>
  );
}

export default Header;