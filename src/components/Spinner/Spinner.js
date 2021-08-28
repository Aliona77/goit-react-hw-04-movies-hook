import styles from "./Spinner.module.css";
import Loader from "react-loader-spinner";

export default function Spiner() {
  return (
    <div className={styles.div}>
      <Loader
        type="ThreeDots"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={0}
      />
    </div>
  );
}
