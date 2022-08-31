import { NextPage } from "next";
import SignInForm from "../../components/forms/SignInForm";
import { SignInContainer, SignInStyle } from "../../utils/styles/auth";

const SignIn: NextPage = () => {
  return (
    <SignInStyle>
      <SignInContainer>
        <SignInForm />
      </SignInContainer>
    </SignInStyle>
  );
};

export default SignIn;
