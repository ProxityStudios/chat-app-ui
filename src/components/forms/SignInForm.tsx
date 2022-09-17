import NextLink from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import { useAuth } from "../../contexts/AuthContext";
import {
  Button,
  Divider,
  InputContainer,
  InputField,
  InputLabel,
  InputRequired,
  Link,
} from "../../utils/styles";
import {
  SignInFormFooter,
  SignInFormHeading,
  SignInFormInputsContainer,
} from "../../utils/styles/auth";

export interface SignInFormProps {}

export function SignInForm(props: SignInFormProps) {
  const router = useRouter();
  const { login } = useAuth();

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log("Inside sign in form submit function");
    console.log("Email:", e.currentTarget.email.value);
    console.log("Password:", e.currentTarget.password.value);

    login(e.currentTarget.email.value, e.currentTarget.password.value);
    router.push("/conversations");
  };

  return (
    <form onSubmit={onSubmit}>
      <SignInFormHeading>Sign in to continue</SignInFormHeading>

      <SignInFormInputsContainer>
        <InputContainer>
          <InputLabel htmlFor="email-input">Email</InputLabel>
          <InputRequired>*</InputRequired>
          <InputField
            type="email"
            id="email-input"
            name="email"
            placeholder="example@mail.com"
            required
          />
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="password-input">Password</InputLabel>
          <InputRequired>*</InputRequired>
          <InputField
            type="password"
            id="password-input"
            name="password"
            placeholder="******"
            required
            minLength={6}
            maxLength={18}
          />
        </InputContainer>
      </SignInFormInputsContainer>

      <Button
        css={{
          marginTop: 20,
        }}
        width="full"
        type="submit"
      >
        Sign in
      </Button>

      <Divider view="shortened" />

      <SignInFormFooter>
        Don&apos;t have an account?
        <NextLink href="/auth/sign-up" passHref>
          <Link>Sign up</Link>
        </NextLink>
      </SignInFormFooter>
    </form>
  );
}

export default SignInForm;
