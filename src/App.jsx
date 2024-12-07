import { en, zh } from './texts/en';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  const [lang, setLang] = useState('en');

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="bg-primary">
      <div className="flex flex-col items-center justify-center h-[3.4rem] fixed w-full pt-10">
        <ul className="z-50 menu menu-horizontal bg-base-200 rounded-box">
          <li>
            <Link to={'/'}>
              {' '}
              <FontAwesomeIcon icon={faHouse} />
            </Link>
          </li>
          <li>
            <Link>Item 2</Link>
          </li>
          <li>
            <Link>Item 3</Link>
          </li>
          <li>
            <Link
              to={'/'}
              onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
            >
              {lang === 'en' ? '中文' : 'EN'}
            </Link>
          </li>
        </ul>
      </div>
      {/* hero section */}
      <div className="min-h-screen hero bg-primary">
        <div className="flex-col hero-content lg:flex-row">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="flex flex-col gap-0 border-2 border-black ">
            <h1 className="text-5xl font-bold">{lang === 'en' ? en.name : zh.name}</h1>
            <p className="py-6">{lang === 'en' ? en.webDeveloper : zh.webDeveloper}.</p>
            <p className="py-6">{lang === 'en' ? en.slogan : zh.slogan}.</p>
            <div className="flex flex-col ">
              <h1>5+ </h1>
              <p>{lang === 'en' ? en.completed : zh.completed}</p>
            </div>
          </div>
        </div>
      </div>
      {/* about section */}
      <div className="flex flex-col items-center justify-center h-screen bg-tertiary">
        <h1 className="text-3xl font-bold text-secondary">{lang === 'en' ? en.myNameIs : zh.myNameIs}</h1>
        <h1 className="text-3xl font-bold text-secondary">{lang === 'en' ? en.iAm : zh.iAm}</h1>
        <h1 className="text-3xl font-bold text-secondary">{lang === 'en' ? en.webDeveloper : zh.webDeveloper}</h1>
      </div>
      {/* about section */}
      <div className="flex flex-col items-center justify-center h-screen bg-tertiary">
        <h1 className="text-3xl font-bold text-secondary">{lang === 'en' ? en.myNameIs : zh.myNameIs}</h1>
        <h1 className="text-3xl font-bold text-secondary">{lang === 'en' ? en.iAm : zh.iAm}</h1>
        <h1 className="text-3xl font-bold text-secondary">{lang === 'en' ? en.webDeveloper : zh.webDeveloper}</h1>
      </div>
      <footer className="p-10 footer bg-base-200 text-base-content">
        <aside>
          <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-current"
          >
            <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
          </svg>
          <p>
            Made with ❤️ by Rizki Maulana
            <br />
            {`Copyright © ${new Date().getFullYear()} Rizki Maulana. All rights reserved.`}
          </p>
        </aside>

        <nav>
          <h6 className="footer-title">{lang === 'en' ? en.menu : zh.menu}</h6>
          <a className="link link-hover">{lang === 'en' ? en.home : zh.home}</a>
          <a className="link link-hover">{lang === 'en' ? en.about : zh.about}</a>
          <a className="link link-hover">{lang === 'en' ? en.projects : zh.projects}</a>
          <a className="link link-hover">{lang === 'en' ? en.home : zh.home}</a>
        </nav>
        <nav>
          <h6 className="footer-title">{lang === 'en' ? en.socials : zh.socials}</h6>
          <Link
            target="_blank"
            to={'https://github.com/rizkimaula'}
            className="link link-hover"
          >
            Github
          </Link>
          <Link
            target="_blank"
            to={'https://x.com/rizkima666'}
            className="link link-hover"
          >
            X
          </Link>
          <Link
            target="_blank"
            to={'https://instagram.com/rizkimaula121'}
            className="link link-hover"
          >
            Instagram
          </Link>
        </nav>
      </footer>
    </div>
  );
};

export default App;
