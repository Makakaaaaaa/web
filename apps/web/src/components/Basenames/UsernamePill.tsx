import { BaseSepoliaName, getUserNamePicture } from 'apps/web/src/utils/usernames';
import classNames from 'classnames';
import Image from 'next/image';

export enum UsernamePillVariants {
  Inline = 'inline',
  Card = 'card',
}

type UsernamePillProps = {
  variant: UsernamePillVariants;
  username: BaseSepoliaName;
};

export function UsernamePill({ variant, username }: UsernamePillProps) {
  const transitionClasses = 'transition-all duration-200 ease-in-out';

  const pillNameClasses = classNames(
    'bg-blue-500 text-white relative leading-[2em] overflow-hidden text-ellipsis max-w-full',
    'shadow-[0px_8px_16px_0px_rgba(0,82,255,0.32),inset_0px_8px_16px_0px_rgba(255,255,255,0.25)]',

    transitionClasses,
    {
      // Note: If you change this py-5, it won't match the dropdown's height
      'rounded-[5rem] py-5 px-8 w-fit': variant === UsernamePillVariants.Inline,
      'rounded-[2rem] py-8 px-10 pt-40 w-full': variant === UsernamePillVariants.Card,
    },
  );

  const avatarClasses = classNames(
    'inline-block overflow-hidden rounded-full',
    'absolute',
    transitionClasses,
    {
      'h-[4rem] max-h-[4rem] min-h-[4rem] w-[4rem] min-w-[4rem] max-w-[4rem] top-4 left-4':
        variant === UsernamePillVariants.Inline,
      'h-[3rem] max-h-[3rem] min-h-[3rem] w-[3rem] min-w-[3rem] max-w-[3rem] top-10 left-10':
        variant === UsernamePillVariants.Card,
    },
  );

  const userNameClasses = classNames(
    'overflow-y-hidden text-ellipsis whitespace-nowrap',
    transitionClasses,
    {
      'text-5xl pl-[4rem]': variant === UsernamePillVariants.Inline,
      'text-3xl pl-0 mt-20': variant === UsernamePillVariants.Card,
    },
  );

  const selectedProfilePicture = getUserNamePicture(username);

  return (
    <div className={pillNameClasses}>
      <figure className={avatarClasses}>
        <Image
          src={selectedProfilePicture}
          priority
          loading="eager"
          alt={username}
          title={username}
          className="object-fill"
        />
      </figure>
      <span className={userNameClasses}>{username}</span>
    </div>
  );
}