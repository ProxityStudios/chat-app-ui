import { NextPage } from "next";
import SignInForm from "../../components/forms/SignInForm";
import { SignInContainer, SignInView } from "../../utils/styles/auth";

const SignIn: NextPage = () => {
  return (
    <SignInView>
      <SignInContainer>
        <SignInForm />
      </SignInContainer>
    </SignInView>
  );
};

export default SignIn;
