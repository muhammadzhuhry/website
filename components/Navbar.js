import { useEffect } from "react";

const Navbar = () => {
  const switched = () => {
    const html = document.getElementsByTagName('html')[0].classList;
    if (html.contains('dark')) {
      html.remove('dark');
    } else {
      html.add('dark');
    }
  }

  return (
    <nav>
      <div className='p-4 md:p-8 ml-4 mr-4 col-2 flex items-center justify-between'>
        <div className='text-4xl font-navbar opacity-70 dark:text-white col-1'>Zhuhry<span className='text-red-600'>.</span></div>
        <div>
          <input type='checkbox' className='checkbox' id='toggle' onClick={switched} />
          <label className='label bg-white dark:bg-gray-600' htmlFor='toggle'>
            <i className='fas fa-moon'></i>
            <i className='fas fa-sun'></i>
            <div className='ball'></div>
          </label>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;