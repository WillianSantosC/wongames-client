import Link from "next/link";
import { MdOutlineEmail, MdLockOutline } from "react-icons/md";

import Button from "../Button";
import TextField from "../TextField";
import { FormLink, FormWrapper } from "../Form";

import * as S from "./styles";

const FormSignIn = () => (
  <FormWrapper>
    <form>
      <TextField
        name="email"
        placeholder="Email"
        type="email"
        icon={<MdOutlineEmail />}
      />
      <TextField
        name="password"
        placeholder="Password"
        type="password"
        icon={<MdLockOutline />}
      />
      <S.ForgotPassword href="#">Forgot your password?</S.ForgotPassword>

      <Button size="large" fullWidth>
        Sign in now
      </Button>

      <FormLink>
        Don’t have an account?
        <Link href="/sign-up">Sign up</Link>
      </FormLink>
    </form>
  </FormWrapper>
);

export default FormSignIn;
