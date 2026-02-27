import styles from "./PageHeader.module.css";

export default function PageHeader({ title, subtitle, rightSlot }) {
  return (
    <div className={styles.header}>
      <div>
        <h1 className={styles.title}>{title}</h1>
        {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
      </div>

      <div className={styles.right}>
        {rightSlot}
      </div>
    </div>
  );
}