import Alert from "@/components/Alert";
import Button from "@/components/Button";
import Loader from "@/components/Loader";
import Section from "@/components/Section/Section";
import TextField from "@/components/TextField";
import { validateEmail } from "@/helpers/validateEmail";
import { useAppDispatch } from "@/store/hooks";
import { loginUserThunk } from "@/store/user/thunks";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./loginform.module.scss";

const LoginForm: React.FC = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [validEmail, setValidEmail] = useState<boolean>(false);
  const [validForm, setValidForm] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const loginUser = async () => {
    setLoading(true);
    if (showError) {
      setShowError(false);
    }
    try {
      await dispatch(loginUserThunk({ email, password }));
      router.push("/admin");
    } catch (error) {
      setValidForm(false);
      setShowError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (validateEmail(email)) {
      setValidEmail(true);
      if (password.length > 0) {
        setValidForm(true);
      }
    } else {
      setValidEmail(false);
      setValidForm(false);
    }

    if (password.length === 0) {
      setValidForm(false);
    }
  }, [email, password, setValidEmail, setValidForm, validEmail]);

  useEffect(() => {
    if (!validForm) {
      setValidEmail(false);
    }
  }, [validForm]);

  return (
    <Section>
      <h1>{t("login")}</h1>
      <form className={styles["login-form"]}>
        <TextField
          value={email}
          type="email"
          required
          label={t("email")}
          error={!validEmail && email.length > 0}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          value={password}
          type="password"
          required
          label={t("password")}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="contained"
          disabled={!validForm || loading}
          onClick={loginUser}
        >
          {t("login")}
        </Button>

        {showError && (
          <Alert severity="error">{t("login-error-message")}</Alert>
        )}

        {loading && <Loader />}
      </form>
    </Section>
  );
};

export default LoginForm;
