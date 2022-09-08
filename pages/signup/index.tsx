import Head from "next/head";
import Link from "next/link";
import styles from "./Signup.module.css";
import Alert from "../../components/alert";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Signup() {
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const router = useRouter();
  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = event.target.email.value,
      password = event.target.password.value,
      repeatPassword = event.target.repeatPassword.value;

    const rawData = {
      email: email,
      password: password,
    };

    const data = JSON.stringify(rawData);

    if (password !== repeatPassword) {
      setError(true);
      setErrorMsg("Password Not Match!");
      setTimeout(() => setError(false), 5000);
    } else {
      await fetch("/api/signup", {
        body: data,
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });
      await router.push("/signup/404");
    }
  };

  return (
    <>
      <Head>
        <title>Sign up your account</title>
        <meta name="description" content="Sign up page chat app" />
      </Head>
      <h2 className={styles["page-title"]}>Signup Your Account</h2>
      <section className={styles["login-card"]}>
        {error ? <Alert content={errorMsg} /> : ""}
        <form onSubmit={handleSubmit}>
          <div className={styles["input-group"]}>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
          </div>
          <div className={styles["input-group"]}>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>
          <div className={styles["input-group"]}>
            <label htmlFor="repeatPassword">Repeat Password</label>
            <input type="password" name="repeatPassword" id="repeatPassword" />
          </div>
          <input
            type="submit"
            value="Sign Up"
            className={styles["submit-button"]}
          />
          <div className="divider" />
          <div className={styles["callout"]}>
            Have an account?{" "}
            <Link href="/login">
              <a className={styles["card-link"]}>Login.</a>
            </Link>
          </div>
        </form>
      </section>
    </>
  );
}
