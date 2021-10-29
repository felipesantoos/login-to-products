import React from "react";
import Button from "../components/Button";

import styles from "../styles/pages/LoginPage.module.scss";

function LoginPage() {

    function submit(event: React.FormEvent) {
        event.preventDefault();
        console.log("Fazer login");
    }

    return (
        <div className={styles.container}>
            <form onSubmit={submit}>
                <legend>Fazer Login</legend>
                <div>
                    <label htmlFor="username">Usuário: </label>
                    <input id="username" name="username" type="text" />
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input id="password" name="password" type="password" />
                </div>
                <Button styleType="primary" type="submit">Entrar</Button>
            </form>
        </div>
    );
}

export default LoginPage;
