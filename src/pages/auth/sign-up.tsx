import { NextPage } from "next";
import SignUpForm from "../../components/forms/SignUpForm";
import { SignUpContainer, SignUpView } from "../../utils/styles/auth";

const SignUp: NextPage = () => {
  return (
    <SignUpView>
      <SignUpContainer>
        <SignUpForm />
      </SignUpContainer>
    </SignUpView>
  );
};

export default SignUp;
