import cx from 'clsx';
import { FOCUS_VISIBLE_OUTLINE } from '../lib/constants';
import { GithubIcon, YoutubeIcon } from './icons/';

export const Navigation = () => {
  return (
    <div className="flex items-center space-x-7 text-base font-semibold leading-none text-rose-100/90">
      <a
        className={cx('group', FOCUS_VISIBLE_OUTLINE)}
        href="https://github.com/FrontendFrenzy"
        target="_blank"
        rel="noreferrer"
        title="Github Link"
        role="link"
      >
        <div className="sm:flex sm:items-center sm:space-x-2">
          <div className="mb-1.5 flex justify-center sm:mb-0 sm:block">
            <div className="rounded-lg bg-gradient-to-tl from-purple-500/80 to-rose-400/80 p-1 shadow-lg transition-all duration-300 ease-out group-hover:scale-[1.2] group-hover:rounded-[10px] group-hover:shadow-purple-500/40 group-active:translate-y-1">
              <GithubIcon className="w-[18px] transform text-rose-100 transition delay-100 duration-500 ease-out group-hover:scale-110" />
            </div>
          </div>
          <span>Github</span>
        </div>
      </a>

      <a
        className={cx('group', FOCUS_VISIBLE_OUTLINE)}
        href="https://www.youtube.com/@codewithtyson7878"
        target="_blank"
        rel="noreferrer"
        title="Youtube Link"
        role="link"
      >
        <div className="sm:flex sm:items-center sm:space-x-2">
          <div className="mb-1.5 flex justify-center sm:mb-0 sm:block">
            <div className="rounded-lg bg-gradient-to-tl from-purple-500/80 to-rose-400/80 p-1 shadow-lg transition-all duration-300 ease-out group-hover:scale-[1.2] group-hover:rounded-[10px] group-hover:shadow-purple-500/40 group-active:translate-y-1">
              <YoutubeIcon className="w-[18px] transform text-rose-100 transition delay-100 duration-500 ease-out group-hover:scale-110" />
            </div>
          </div>
          <span>YouTube</span>
        </div>
      </a>
    </div>
  );
};
