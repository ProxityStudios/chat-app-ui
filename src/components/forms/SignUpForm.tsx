import NextLink from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import {
  Button,
  Divider,
  InputContainer,
  InputField,
  InputInformation,
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
    router.push("/conversations");
  };

  return (
    <form onSubmit={onSubmit}>
      <SignUpFormHeading>Sign up to continue</SignUpFormHeading>
      <SignUpFormInputsContainer>
        <InputContainer>
          <InputLabel htmlFor="display-name-input">Display Name</InputLabel>
          <InputRequired>*</InputRequired>
          <InputField
            type="text"
            id="display-name-input"
            name="display-name"
            placeholder="Ticho Lawy"
            required
          />
          <InputInformation>How others should call you?</InputInformation>
        </InputContainer>

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
          <InputInformation>
            Others will add you with this email after you sign up.
          </InputInformation>
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
          <InputInformation>
            Use strong password if you don&apos;t want to be hacked!
          </InputInformation>
        </InputContainer>
      </SignUpFormInputsContainer>

      <Button
        css={{
          marginTop: 35,
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
