import { useContext, useEffect, useState } from "react";
import UiContext from "../../../context/ui";

import Crud from "../../../client/Crud";

import styles from "./Login.module.scss";

const Login = () => {
  const { setUserValidated } = useContext(UiContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [text, setText] = useState("");

  const loginRequest = async (email: any, password: any) => {
    const server = new Crud("/api/user");
    try {
      const res = await server.post("/validate", { email, password });

      if (res?.status === 200) {
        console.log("success: >>", res);
        setUserValidated(true);
        setError(false);
      } else {
        setError(true);
        setText("Credenciales invalidas");
      }
    } catch (error) {
      console.log("axios error: ", error);
    }
  };

  useEffect(() => {}, [error]);

  return (
    <div className={styles.login}>
      <div className={styles.contentLogin}>
        {error ? <div className={styles.error}>{text}</div> : null}
        <div className={styles.imgLogo}></div>
        <div className={styles.formLogin}>
          <div className={styles.field}>
            <input
              id="inputEmail"
              type="email"
              value={email}
              placeholder=" "
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <label htmlFor="inputEmail">Correo electrónico</label>
          </div>
          <div className={styles.field}>
            <input
              id="inputPassword"
              type="password"
              value={password}
              placeholder=" "
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <label htmlFor="inputPassword">Contraseña</label>
          </div>
        </div>
        <button
          type="submit"
          onClick={() => {
            if (email !== "" && password !== "") {
              loginRequest(email, password);
            } else {
              setText("Todos los campos son requeridos");
              setError(true);
            }
          }}
        >
          Ingresar
        </button>
        <a href="#">Olvidé mi contraseña</a>
        <div className={styles.create}>
          <label>Sin Usuario?</label>
          <a href="/CreateUser">Crear Cuenta</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
