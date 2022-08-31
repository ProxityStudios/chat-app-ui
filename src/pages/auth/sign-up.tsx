import { NextPage } from "next";
import SignUpForm from "../../components/forms/SignUpForm";
import { SignUpContainer, SignUpStyle } from "../../utils/styles/auth";

const SignUp: NextPage = () => {
  return (
    <SignUpStyle>
      <SignUpContainer>
        <SignUpForm />
      </SignUpContainer>
    </SignUpStyle>
  );
};

export default SignUp;
