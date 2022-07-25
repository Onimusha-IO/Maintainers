import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

import styles from "./Modal.module.scss";

const Window = ({ setModal, tittle, children }: any) => {
  return (
    <div className={styles.window}>
      <div className={styles.header}>
        <FontAwesomeIcon icon={faCircleXmark} className={styles.iconLeft} />
        <label>{tittle}</label>
        <FontAwesomeIcon icon={faCircleXmark} className={styles.iconRight} onClick={() => {setModal(false)}} />
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Window;
