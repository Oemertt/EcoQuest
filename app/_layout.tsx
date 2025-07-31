import { useColorScheme } from '@/hooks/useColorScheme';
import { ClerkProvider } from '@clerk/clerk-expo';
import { tokenCache } from '@clerk/clerk-expo/token-cache';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import "../global.css";

export default function RootLayout() {
    const colorScheme = useColorScheme();
    const [loaded] = useFonts({
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    });

    if (!loaded) return null;

    return (
        <ClerkProvider tokenCache={tokenCache}>
            <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
                <Stack>
                    <Stack.Screen name="(auth)" options={{ headerShown: false }} />
                    <Stack.Screen name="home" options={{ headerShown: false }} />
                    <Stack.Screen name="tasks" options={{ headerShown: false }} />
                    <Stack.Screen name="taskdetail" options={{ headerShown: false }} />
                    <Stack.Screen name="challengedetail" options={{ headerShown: false }} />
                    <Stack.Screen name="progress" options={{ headerShown: false }} />
                </Stack>
                <StatusBar style="auto" />
            </ThemeProvider>
        </ClerkProvider>
    );
}
