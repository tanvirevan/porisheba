/* eslint-disable react/react-in-jsx-scope */
'use client';
import Guestpage from "./pages/home/guest/page";

// import {signOut, useSession} from 'next-auth/react';

export default function Home() {
  // const session = useSession();
  return (
    <div>
      {/* {session?.data.user.name}
      <button onClick={() => signOut()}>logout</button> */}
      <Guestpage></Guestpage>
    </div>
  );
}
