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
      <h2 className={styles["page-title"]}>Login to chat app</h2>
      <section className={styles["login-card"]}>
        <form action="/" method="post">
          <div className={styles["input-group"]}>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" />
          </div>
          <div className={styles["input-group"]}>
            <label htmlFor="password">Password</label>
            <Link href="/resetpassword">
              <a className={styles["card-link"]}>Forgot password?</a>
            </Link>
            <input type="password" name="password" id="password" />
          </div>
          <label htmlFor="rememberMe" className={styles["chk-remember"]}>
            <input type="checkbox" name="rememberMe" id="rememberMe" />
            Remember Me!
          </label>
          <input
            type="submit"
            value="Sign In"
            className={styles["submit-button"]}
          />
          <div className="divider" />
          <div className={styles["login-callout"]}>
            Don't have account?{" "}
            <Link href="/signup">
              <a className={styles["card-link"]}>Create an account.</a>
            </Link>
          </div>
        </form>
      </section>
    </>
  );
}
