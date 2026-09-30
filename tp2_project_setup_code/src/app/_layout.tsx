import { AuthContextProvider } from "@/contexts/AuthContext";
import { Stack, router } from "expo-router";
import { useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";

function MainLayout() {
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated === undefined) {
      return;
    } else if (isAuthenticated === false) {
      router.replace("/");
    } else if (isAuthenticated === true) {
      router.push("/preview");
    }

  }, [isAuthenticated]);

  return (
  <Stack>
    <Stack.Screen name="index"/>
    <Stack.Screen name = "preview"/>
  </Stack>
)
}

export default function RootLayout() {
  return (
    <AuthContextProvider>
      <MainLayout/>
    </AuthContextProvider>
  );
}
