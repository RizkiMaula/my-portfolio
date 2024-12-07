import { en, zh } from './texts/en';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faSuitcase } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faXTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

const App = () => {
  const [lang, setLang] = useState('en');

  return (
    <div className="bg-primary">
      {/* navbar */}
      <div className="flex flex-col items-center justify-center h-[3.4rem] bottom-10 md:top-0 fixed w-full pt-10 z-50">
        <ul className=" menu menu-horizontal bg-base-200 rounded-box">
          <li>
            <Link to={'/'}>
              <FontAwesomeIcon icon={faHouse} />
            </Link>
          </li>
          <li>
            <Link>
              <FontAwesomeIcon icon={faUser} />
            </Link>
          </li>
          <li>
            <Link>
              <FontAwesomeIcon icon={faSuitcase} />
            </Link>
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
      {/* content */}
      <div className="flex flex-col w-full md:flex-row ">
        {/* Profile */}
        <aside className="flex flex-col items-center w-[34rem] px-2 py-4 border-2 border-black h-max-screen">
          <div className="fixed flex flex-col items-center justify-center text-center">
            <img
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
              className="max-w-sm rounded-lg shadow-2xl w-[10rem] h-[15rem]"
            />
            <div>
              <h1 className="text-xl font-bold">{lang === 'en' ? en.name : zh.name}</h1>
              <p className="py-6">{lang === 'en' ? en.webDeveloper : zh.webDeveloper}.</p>
              <p className="py-6">{lang === 'en' ? en.slogan : zh.slogan}.</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center h-[3.4rem] bottom-10 fixed w-full pt-10 z-50">
            <ul className=" menu menu-horizontal bg-base-200 rounded-box">
              <li>
                <Link
                  target="_blank"
                  to={'https://github.com/rizkimaula'}
                >
                  <FontAwesomeIcon icon={faGithub} />
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  to={'https://x.com/rizkima666'}
                >
                  <FontAwesomeIcon icon={faXTwitter} />
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  to={'https://www.linkedin.com/in/rizkimaulana892/'}
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </Link>
              </li>
            </ul>
          </div>
        </aside>
        {/* Main Content */}
        <div>
          <div className="flex flex-col items-center justify-center w-full h-screen border-2 border-black">
            {/* Title */}
            <div className="flex flex-col w-full gap-2 my-3 border-2 border-black">
              <span className="badge bg-tertiary text-secondary">Who Am I?</span>
              <h1 className="text-2xl font-bold">{lang === 'en' ? en.aboutMe : zh.aboutMe}</h1>
            </div>
            {/* Education */}
            <div className="flex flex-col w-full gap-2 my-3 border-2 border-black">
              <span className="badge bg-tertiary text-secondary">Education</span>
              <div className="collapse collapse-arrow bg-base-200">
                <input
                  type="radio"
                  name="my-accordion-2"
                  defaultChecked
                />
                <div className="text-xl font-medium collapse-title">Dibimbing.id Bootcamp Frontend Web Developer Program (Apr-Nov 2024)</div>
                <div className="collapse-content">
                  <ul>
                    <li>{lang === 'en' ? en.dibimbing : zh.dibimbing}</li>
                    <li>{lang === 'en' ? en.dibimbing2 : zh.dibimbing2}</li>
                    <li>{lang === 'en' ? en.dibimbing3 : zh.dibimbing3}</li>
                  </ul>
                </div>
              </div>
              <div className="collapse collapse-arrow bg-base-200">
                <input
                  type="radio"
                  name="my-accordion-2"
                />
                <div className="text-xl font-medium collapse-title">Universitas Indraprasta PGRI (2018-2024)</div>
                <div className="collapse-content">
                  <p>hello</p>
                </div>
              </div>
            </div>
          </div>
          {/* Footer */}
          <footer className="bottom-0 w-full p-10 footer bg-base-200 text-base-content">
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
      </div>
    </div>
  );
};

export default App;
