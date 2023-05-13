import { Button } from "react-native";

const Onboarding = ({ handleSignIn }) => {
  return <Button title="Login" onPress={handleSignIn} />;
};

export default Onboarding;
