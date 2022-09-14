import { NextPage } from "next";
import SignUpForm from "../../components/forms/SignUpForm";
import { AuthPage, AuthPageContainer } from "../../utils/styles/auth";

const SignUp: NextPage = () => {
  return (
    <AuthPage>
      <AuthPageContainer>
        <SignUpForm />
      </AuthPageContainer>
    </AuthPage>
  );
};

export default SignUp;
