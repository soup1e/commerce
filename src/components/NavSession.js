import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function NavSession() {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    return (
      <button className="dropdown dropdown-end btn btn-square btn-ghost">
        <label tabIndex={0} className="avatar dropdown-button mt-1">
          <Image
            className="rounded-full"
            src={session.user.image}
            width={24}
            height={24}
            alt="Product Image"
          />
        </label>
        <ul
          tabIndex={0}
          className="shadow menu dropdown-content bg-lightDark rounded-box w-52"
        >
          <li>
            <Link href="/account">Account</Link>
          </li>
          <li>
            <Link href="/api/auth/signout">Logout</Link>
          </li>
        </ul>
      </button>
    );
  }

  return (
    <Link className="btn btn-square btn-ghost" href="/api/auth/signin">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-8 h-8"
      >
        <path
          fillRule="evenodd"
          d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
          clipRule="evenodd"
        />
      </svg>
    </Link>
  );
}
