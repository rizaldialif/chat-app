import Head from "next/head";
import { useRouter } from "next/router";

export default function CompleteSignup() {
  const router = useRouter();
  const email = router.query.email;

  return (
    <>
      <Head>
        <title>Please complete your signup!</title>
        <meta name="description" content="Completing signup your account" />
      </Head>
    </>
  );
}
