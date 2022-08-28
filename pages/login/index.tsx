import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Login.module.css";

export default function Login() {
  const router = useRouter();
  const handleClick = (e) => {
    router.push("https://www.instagram.com");
    e.preventDefault();
  };
  return (
    <>
      <Head>
        <title>Login Page Chat app</title>
        <meta name="description" content="Login page chat app" />
      </Head>
      <h1 className={styles.pageTitle}>Login Page</h1>
      <form method="post" className={styles.formContainer}>
        <label htmlFor="username" className={styles.formLabel}>
          Username
          <input
            type="text"
            name="username"
            id="username"
            className={styles.formInput}
          />
        </label>
        <label htmlFor="password" className={styles.formLabel}>
          Password
          <input
            type="password"
            name="password"
            id="password"
            className={styles.formInput}
          />
        </label>
        <label htmlFor="rememberMe" className={styles.checkboxLabel}>
          <input type="checkbox" name="rememberMe" id="rememberMe" />
          Remember me
        </label>
        <button className={styles.formButton} onClick={handleClick}>
          Login
        </button>
        <div className="divider" />
        <Link href="/signup">
          <a className={styles.signupText}>Create an account!</a>
        </Link>
      </form>
    </>
  );
}
