import { ReactNode } from "react";

import styles from "../styles/components/Button.module.scss";

interface Props {
    children: ReactNode;
    styleType?: "normal" | "primary";
    type?: "submit" | "button" | "reset";
    onClick?(): void;
}

function Button({ children, styleType = "normal", type, onClick }: Props) {
    const className = `${styles.container} ${styles[styleType]}`;

    return (
        <button
            className={className}
            type={type}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default Button;
