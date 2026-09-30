import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";

export default function Index() {
  const [email, setEmail] = useState('');
  const [pswd, setPswd] = useState('');

  const { register, isAuthenticated } = useAuth();

  return (
    <View style={styles.container}>
      <View>
        <Text>email</Text>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
        />

        <Text>mot de passe</Text>
        <TextInput
          style={styles.input}
          onChangeText={setPswd}
          value={pswd}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={() => { register(email, pswd) }}>
        <Text style={{ color: "white" }}>Créer un compte</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    borderRadius: 20,
    backgroundColor: "blue",
    padding: 10,
    margin: 10
  },
  input: {
    borderRadius: 5,
    borderWidth: 1,
    margin: 10,
    padding: 5,
    width: 300
  }
});
