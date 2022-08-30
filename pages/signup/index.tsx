import Head from "next/head";
import Link from "next/link";
import styles from "./Signup.module.css";

export default function Signup() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      firstname: event.target.firstname.value,
      lastname: event.target.lastname.value,
      email: event.target.email.value,
      phoneNumber: event.target.phonenumber.value,
      username: event.target.username.value,
      password: event.target.password.value,
    };

    const JSONdata = JSON.stringify(data);
    await fetch("/api/signup", {
      body: JSONdata,
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
  };

  return (
    <>
      <Head>
        <title>Sign up your account</title>
        <meta name="description" content="Sign up page chat app" />
      </Head>
      <h2 className={styles["page-title"]}>Login to chat app</h2>
      <section className={styles["login-card"]}>
        <form onSubmit={handleSubmit}>
          <div className={styles["input-group"]}>
            <label htmlFor="firstname">First Name</label>
            <input type="text" name="firstname" id="firstname" />
          </div>
          <div className={styles["input-group"]}>
            <label htmlFor="lastname">Last Name</label>
            <input type="text" name="lastname" id="lastname" />
          </div>
          <div className={styles["input-group"]}>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
          </div>
          <div className={styles["input-group"]}>
            <label htmlFor="phonenumber">Phone Number</label>
            <input type="text" name="phonenumber" id="phonenumber" />
          </div>
          <div className={styles["input-group"]}>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" />
          </div>
          <div className={styles["input-group"]}>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
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
