import React from 'react';
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
import {Slot, Stack} from "expo-router";
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
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

    if (!loaded) return null;

    return (
        <GluestackUIProvider mode="light">
            <ClerkProvider tokenCache={tokenCache}>
                <Slot/>
                <StatusBar style="auto" />
            </ClerkProvider>
        </GluestackUIProvider>
    );
}
