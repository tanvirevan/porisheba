/* eslint-disable react/react-in-jsx-scope */
import Link from "next/link";

export default async function NotFound()
   {

      return(
         <main className="text-center">
            <h2 className="text-3xl">We Hit a Brick Wall.</h2>
            <p>We could not find, you were looking for.</p>
            <p>Go Back to <Link href="/">Home</Link></p>
         </main>
      );
   }