import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import "@/global.css";
import { ClerkProvider } from '@clerk/clerk-expo';
import { tokenCache } from '@clerk/clerk-expo/token-cache';
import {
  BeVietnamPro_100Thin,
  BeVietnamPro_100Thin_Italic,
  BeVietnamPro_200ExtraLight,
  BeVietnamPro_200ExtraLight_Italic,
  BeVietnamPro_300Light,
  BeVietnamPro_300Light_Italic,
  BeVietnamPro_400Regular,
  BeVietnamPro_400Regular_Italic,
  BeVietnamPro_500Medium,
  BeVietnamPro_500Medium_Italic,
  BeVietnamPro_600SemiBold,
  BeVietnamPro_600SemiBold_Italic,
  BeVietnamPro_700Bold,
  BeVietnamPro_700Bold_Italic,
  BeVietnamPro_800ExtraBold,
  BeVietnamPro_800ExtraBold_Italic,
  BeVietnamPro_900Black,
  BeVietnamPro_900Black_Italic,
} from '@expo-google-fonts/be-vietnam-pro';
import { useFonts } from 'expo-font';
import * as Notifications from "expo-notifications";
import { Stack } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Alert, LogBox } from 'react-native';
import 'react-native-reanimated';


// 👇 hier die Warnung ignorieren
LogBox.ignoreLogs([
    'expo-notifications: Android Push notifications (remote notifications) functionality provided by expo-notifications was removed from Expo Go',
  ]);


export default function RootLayout() {
    const [loaded] = useFonts({
      SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
      'BeVietnamPro-Thin': BeVietnamPro_100Thin,
      'BeVietnamPro-ExtraLight': BeVietnamPro_200ExtraLight,
      'BeVietnamPro-Light': BeVietnamPro_300Light,
      'BeVietnamPro-Regular': BeVietnamPro_400Regular,
      'BeVietnamPro-Medium': BeVietnamPro_500Medium,
      'BeVietnamPro-SemiBold': BeVietnamPro_600SemiBold,
      'BeVietnamPro-Bold': BeVietnamPro_700Bold,
      'BeVietnamPro-ExtraBold': BeVietnamPro_800ExtraBold,
      'BeVietnamPro-Black': BeVietnamPro_900Black,
      'BeVietnamPro-ThinItalic': BeVietnamPro_100Thin_Italic,
      'BeVietnamPro-ExtraLightItalic': BeVietnamPro_200ExtraLight_Italic,
      'BeVietnamPro-LightItalic': BeVietnamPro_300Light_Italic,
      'BeVietnamPro-RegularItalic': BeVietnamPro_400Regular_Italic,
      'BeVietnamPro-MediumItalic': BeVietnamPro_500Medium_Italic,
      'BeVietnamPro-SemiBoldItalic': BeVietnamPro_600SemiBold_Italic,
      'BeVietnamPro-BoldItalic': BeVietnamPro_700Bold_Italic,
      'BeVietnamPro-ExtraBoldItalic': BeVietnamPro_800ExtraBold_Italic,
      'BeVietnamPro-BlackItalic': BeVietnamPro_900Black_Italic,
    });



    const scheduleDaily = async () => {
        await Notifications.scheduleNotificationAsync({
            identifier: "daily-reminder",
            content: {
                title: "EcoQuest Erinnerung",
                body: "Zeit, unsere Umwelt zu schützen",
            },
            trigger: {
                type: Notifications.SchedulableTriggerInputTypes.DAILY,
                hour: 15,
                minute: 14,
            },
        });
    };


    useEffect(() => {
      (async () => {
        const { status: existing } = await Notifications.getPermissionsAsync();
        let finalStatus = existing;
        if (existing !== "granted") {
          const { status } = await Notifications.requestPermissionsAsync();
          finalStatus = status;
        }
        if (finalStatus !== "granted") {
          Alert.alert("Keine Berechtigung", "Benachrichtigungen wurden abgelehnt.");
        }
      })();
      scheduleDaily();
    }, []);
  
    if (!loaded) return null;  // <-- erst NACH allen Hooks
    
    console.log('Backend URL:', process.env.EXPO_PUBLIC_BACKEND_URL);
    console.log('Clerk Key:', process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY);

    if (!process.env.EXPO_PUBLIC_BACKEND_URL) {
      throw new Error('EXPO_PUBLIC_BACKEND_URL ist nicht gesetzt!');
    }
    return (
      <GluestackUIProvider mode="light">
        <ClerkProvider tokenCache={tokenCache}>
          <Stack>
          <Stack.Screen
              name="(auth)"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="(tabs)"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="modal"
              options={{
                title: "Abzeichen",
                presentation: 'formSheet',
                sheetGrabberVisible: true,
                animation: 'slide_from_bottom',
                sheetInitialDetentIndex: 0,
                sheetElevation: 24,
                sheetCornerRadius: 20,
                sheetAllowedDetents: [0.5, 1.0],
                sheetExpandsWhenScrolledToEdge: true,
              }}
            />
            <Stack.Screen
              name="modalLevelMap"
              options={{
                title: "Level Map",
                presentation: 'formSheet',
                sheetGrabberVisible: true,
                animation: 'slide_from_bottom',
                sheetInitialDetentIndex: 0,
                sheetElevation: 24,
                sheetCornerRadius: 20,
                sheetAllowedDetents: [0.5, 1.0],
                sheetExpandsWhenScrolledToEdge: true,
                contentStyle: { backgroundColor: 'white' },
              }}
            />
          </Stack>
          <StatusBar style="auto" />
        </ClerkProvider>
      </GluestackUIProvider>
    );
  }
  