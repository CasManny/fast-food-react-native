import { useRouter } from "expo-router";
import React from "react";
import { Button, Text, View } from "react-native";

const SignIn = () => {
  const router = useRouter();
  return (
    <View>
      <Text>SignIn</Text>
      <Button title="sign up" onPress={() => router.navigate("/")} />
    </View>
  );
};

export default SignIn;
