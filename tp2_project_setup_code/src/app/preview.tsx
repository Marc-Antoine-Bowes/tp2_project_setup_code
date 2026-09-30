import { Text, View, StyleSheet, FlatList } from "react-native";
import { useEffect, useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { doc, collection, getDocs } from "@firebase/firestore";
import { db } from "@/firebaseConfig";
import { User } from '@/types/user'

export default function preview() {
  const [users, setUsers] = useState<User[]>();

  useEffect(() => {
    const fetchUsers = async () => {
      const snapshot = await getDocs(collection(db, "users"));

      const users: User[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as User[];

      setUsers(users);
    };

    fetchUsers();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titre}>Addresses inscrites dans la base de données</Text>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.email}</Text>
          </View>
        )}
      />
    </View>
  );
}

async function getUsersSnapshot() {

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titre: {
    fontWeight:"bold",
    fontSize: 20
  }
});
