import { NextPage } from "next";
import SignInForm from "../../components/forms/SignInForm";
import { AuthPage, AuthPageContainer } from "../../utils/styles/auth";

const SignIn: NextPage = () => {
  return (
    <AuthPage>
      <AuthPageContainer>
        <SignInForm />
      </AuthPageContainer>
    </AuthPage>
  );
};

export default SignIn;
