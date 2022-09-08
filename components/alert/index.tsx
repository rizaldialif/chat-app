import styles from "./Alert.module.css";

export default function Alert({ content }) {
  return <div className={styles["alert"]}>{content}</div>;
}
