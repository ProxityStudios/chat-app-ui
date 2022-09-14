import NextLink from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
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
  SignUpFormFooter,
  SignUpFormHeading,
  SignUpFormInputsContainer,
} from "../../utils/styles/auth";

export interface SignUpFormProps {}

export function SignUpForm(props: SignUpFormProps) {
  const router = useRouter();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/conversations/1");
  };

  return (
    <form onSubmit={onSubmit}>
      <SignUpFormHeading>Sign up to continue</SignUpFormHeading>
      <SignUpFormInputsContainer>
        <InputContainer>
          <InputLabel htmlFor="username-input">Username</InputLabel>
          <InputRequired>*</InputRequired>
          <InputField
            type="text"
            id="username-input"
            name="username"
            placeholder="TichoIsCool"
            required
          />
        </InputContainer>

        <InputContainer>
          <InputLabel htmlFor="email-input">Email</InputLabel>
          <InputRequired>*</InputRequired>
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
      </SignUpFormInputsContainer>

      <Button
        css={{
          marginTop: "20px",
        }}
        width="full"
        type="submit"
      >
        Sign up
      </Button>

      <Divider view="shortened" />

      <SignUpFormFooter>
        Already have an account?
        <NextLink href="/auth/sign-in" passHref>
          <Link>Sign in</Link>
        </NextLink>
      </SignUpFormFooter>
    </form>
  );
}

export default SignUpForm;
