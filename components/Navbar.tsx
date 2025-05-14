"use client";

import Link from "next/link";
import Image from "next/image";
import { redirect, useRouter } from "next/navigation";
import { authClient } from "@/lib/auth.client";

const Navbar = () => {
  const router = useRouter();
  const { data: session } = authClient.useSession();
  const user = session?.user;
  return (
    <header className="navbar">
      <nav>
        <Link href="/">
          <Image
            src="/assets/icons/logo.svg"
            alt="logo"
            width={32}
            height={32}
          />
          <h1>SnapCast</h1>
        </Link>
        {user && (
          <figure>
            <button onClick={() => router.push(`/profile/${user?.id}`)}>
              <Image
                src={user.image || ''}
                alt="User"
                width={36}
                height={36}
                className="rounded-full aspect-square"
              />
            </button>
            <button
              className="cursor-pointer"
              onClick={async () => {
                return await authClient.signOut({
                  fetchOptions: {
                    onSuccess: () => {
                      redirect("/sign-in");
                    },
                  },
                });
              }}
            >
              <Image
                src="/assets/icons/logout.svg"
                width={24}
                height={24}
                alt="logout"
                className="rotate-180"
              />
            </button>
          </figure>
        )}
      </nav>
    </header>
  );
};
export default Navbar;
