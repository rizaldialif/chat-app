import styles from "./Alert.module.css";

export default function Alert({ innerText }) {
  return <div className={styles["alert-error"]}>{innerText}</div>;
}
