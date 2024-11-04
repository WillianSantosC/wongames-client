import Link from "next/link";
import {
  MdOutlineAccountCircle,
  MdOutlineEmail,
  MdLockOutline,
} from "react-icons/md";

import Button from "../Button";
import TextField from "../TextField";
import { FormLink, FormWrapper } from "../Form";

const FormSignUp = () => (
  <FormWrapper>
    <form>
      <TextField
        name="name"
        placeholder="Name"
        type="name"
        icon={<MdOutlineAccountCircle />}
      />
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
      <TextField
        name="confirm-password"
        placeholder="Confirm password"
        type="password"
        icon={<MdLockOutline />}
      />
      <Button size="large" fullWidth>
        Sign up now
      </Button>
      <FormLink>
        Already have an account? <Link href="/sign-in">Sign in</Link>
      </FormLink>
    </form>
  </FormWrapper>
);
export default FormSignUp;
