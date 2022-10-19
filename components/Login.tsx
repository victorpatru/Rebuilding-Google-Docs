/*
TODO: In Production build change in Google Cloud APIs & Services Authorized Domains

from http://localhost:3000/api/auth/callback/google
to https://{YOUR_DOMAIN}/api/auth/callback/google

*/

import Image from "next/image";
import { signIn } from "next-auth/react";
import { Button } from "@material-tailwind/react";

function Login() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen py-4">
      <Image
        src="/docs_login.png"
        alt=""
        height={300}
        width={550}
        objectFit="contain"
      />
      <Button onClick={() => signIn("google")} size="lg" className="w-44 mt-10">
        Login
      </Button>
    </div>
  );
}
export default Login;
