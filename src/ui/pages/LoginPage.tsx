import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

import Button from "../components/Button";

import styles from "../styles/pages/LoginPage.module.scss";

function LoginPage() {
    const appHistory = useHistory();
    const authContext = useContext(AuthContext);

    function submit(event: React.FormEvent) {
        event.preventDefault();

        const inputUsername = document.getElementById("username") as HTMLInputElement;
        const inputPassword = document.getElementById("password") as HTMLInputElement;

        if (inputUsername && inputPassword) {
            const username = inputUsername.value;
            const password = inputPassword.value;

            const isSuccess = authContext.login({ username, password });

            if (isSuccess) {
                appHistory.push("/products");
            } else {
                alert("Dados inválidos! Verifique seu nome de usuário e/ou senha!");
            }
        }
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
