import { ReactNode } from "react";

import styles from "../styles/components/Button.module.scss";

interface Props {
    children: ReactNode;
    styleType?: "normal" | "primary";
    type?: "submit" | "button" | "reset";
}

function Button({ children, styleType = "normal", type }: Props) {
    const className = `${styles.container} ${styles[styleType]}`;

    return (
        <button
            className={className}
            type={type}
        >
            {children}
        </button>
    );
}

export default Button;
