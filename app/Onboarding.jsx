import { Button } from "react-native";

const Onboarding = ({ handleSignIn }) => {
  return <Button title="Login with Google" onPress={handleSignIn} />;
};

export default Onboarding;
