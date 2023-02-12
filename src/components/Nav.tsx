import { useEffect, useState } from "react";

const Nav = () => {
  const [menuToggle, setMenuToggle] = useState<boolean>(false);
  const [navBg, setNavBg] = useState(" bg-opacity-0");

  const changeNavBg = () => {
    window.scrollY > 0
      ? setNavBg(" bg-opacity-100")
      : setNavBg(" bg-opacity-0");
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavBg);
    return () => {
      window.removeEventListener("scroll", changeNavBg);
    };
  }, []);

  return (
    <div className="fixed top-0 flex w-screen flex-col">
      <Banner title="WEB JE VE VÝSTAVBĚ" />
      <nav
        className={
          "flex w-screen items-center justify-between bg-black p-6 transition-colors duration-500 ease-in-out lg:px-12" +
          navBg
        }
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/">
            <span className="sr-only">Pod Činkou</span>
            <img
              className="h-8 rounded-full lg:h-12"
              src="favicon.jpg"
              alt=""
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-zinc-400"
            onClick={() => setMenuToggle(true)}
          >
            <span className="sr-only">Otevřít menu</span>
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              ></path>
            </svg>
          </button>
        </div>
        <div className="hidden items-center lg:flex lg:gap-x-12 ">
          <a
            href="#about"
            className="text-md font-bold uppercase leading-6 text-white"
          >
            O nás
          </a>

          <a
            href="#pricing"
            className="text-md font-bold uppercase leading-6 text-white"
          >
            Naše služby
          </a>

          <a
            href="#reviews"
            className="text-md font-bold uppercase leading-6 text-white"
          >
            Recenze
          </a>

          <a
            href="/blog"
            className="text-md font-bold uppercase leading-6 text-white"
          >
            Blog
          </a>

          <a
            href="#contact"
            className="text-md rounded-full bg-red-700 px-4 py-2 font-bold uppercase leading-6 text-white"
          >
            Napište nám
          </a>
        </div>
        {menuToggle && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 top-0 z-10 h-screen overflow-hidden bg-black p-6 lg:hidden lg:px-12"
          >
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Pod Činkou</span>
                <img className="h-8 rounded-full" src="favicon.jpg" alt="" />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-zinc-400"
                onClick={() => setMenuToggle(false)}
              >
                <span className="sr-only">Zavřít menu</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-zinc-500/25">
                <div className="flex flex-col gap-8 py-12">
                  <a
                    href="#about"
                    className="-mx-3 block rounded-lg px-3 text-2xl font-semibold leading-7 text-white hover:bg-zinc-400/10"
                    onClick={() => setMenuToggle(false)}
                  >
                    O nás
                  </a>

                  <a
                    href="#pricing"
                    className="-mx-3 block rounded-lg px-3 text-2xl font-semibold leading-7 text-white hover:bg-zinc-400/10"
                    onClick={() => setMenuToggle(false)}
                  >
                    Naše služby
                  </a>

                  <a
                    href="#reviews"
                    className="-mx-3 block rounded-lg px-3 text-2xl font-semibold leading-7 text-white hover:bg-zinc-400/10"
                    onClick={() => setMenuToggle(false)}
                  >
                    Recenze
                  </a>

                  <a
                    href="/blog"
                    className="-mx-3 block rounded-lg px-3 text-2xl font-semibold leading-7 text-white hover:bg-zinc-400/10"
                  >
                    Blog
                  </a>

                  <a
                    href="#contact"
                    className="-mx-3 block rounded-lg px-3 text-2xl font-semibold leading-7 text-white hover:bg-zinc-400/10"
                    onClick={() => setMenuToggle(false)}
                  >
                    Napište nám
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Nav;

const Banner = ({ title }: { title: string }) => {
  return (
    <div className="flex h-8 w-screen items-center justify-center gap-2 bg-yellow-500">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-6 w-6"
      >
        <path
          fillRule="evenodd"
          d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
          clipRule="evenodd"
        />
      </svg>
      <span className="text-lg font-bold">{title}</span>
    </div>
  );
};
