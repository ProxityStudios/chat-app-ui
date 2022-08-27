import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import {
  Button,
  Divider,
  InputContainer,
  InputField,
  InputLabel,
} from "../../utils/styles";
import {
  SignInFormFooter,
  SignInFormHeading,
  SignInFormInputsContainer,
} from "../../utils/styles/auth";

export interface SignInFormProps {}

export function SignInForm(props: SignInFormProps) {
  const router = useRouter();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/@me");
  };

  return (
    <form onSubmit={onSubmit}>
      <SignInFormHeading>Sign in to continue</SignInFormHeading>

      <SignInFormInputsContainer>
        <InputContainer>
          <InputLabel htmlFor="email-input">Email</InputLabel>
          <InputField
            type="email"
            id="email-input"
            name="email"
            placeholder="ticho@proxitystudios.tk"
            required
          />
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="password-input">Password</InputLabel>
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
          marginTop: "20px",
        }}
        width="full"
        type="submit"
      >
        Sign in
      </Button>

      <Divider view="shortened" />

      <SignInFormFooter>
        Don&apos;t have an account?
        <Link href="/auth/sign-up">Sign up</Link>
      </SignInFormFooter>
    </form>
  );
}

export default SignInForm;
