import { useHistory } from "react-router";
import Button from "../components/Button";

import styles from "../styles/pages/Error404Page.module.scss";

function Error404Page() {
    const appHistory = useHistory();

    function redirectToLogin() {
        appHistory.push("/login");
    }

    return (
        <div className={styles.container}>
            <h1>Error 404</h1>
            <Button onClick={redirectToLogin}>Ir para Login</Button>
        </div>
    );
}

export default Error404Page;
