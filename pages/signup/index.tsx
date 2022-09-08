import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import styles from "./Signup.module.css";
import Alert from "../../components/alert";

export default function Signup() {
  const [error, setError] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      email: event.target.email.value,
      username: event.target.username.value,
      password: event.target.password.value,
    };

    const JSONdata = JSON.stringify(data);
    const response = await fetch("/api/signup", {
      body: JSONdata,
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    const resData = await response.json();

    if (resData.result) {
      setError(true);
      setTimeout(() => setError(false), 5000);
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
        {/* {error ? ( */}
          <Alert
            innerText={`Username has been registered, Please use another username.`}
          />
        // ) : (
        //   ""
        // )}
        <form onSubmit={handleSubmit}>
          <div className={styles["input-group"]}>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" required />
          </div>
          <div className={styles["input-group"]}>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" required />
          </div>
          <div className={styles["input-group"]}>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" required />
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
