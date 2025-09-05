import { Stack } from "expo-router";

function Layout() {
    return (
    <Stack screenOptions={{
        headerStyle: {
            backgroundColor: '#f9fbfa',
        },
        headerTitleStyle: {
            fontFamily: 'BeVietnamPro-Bold',
            fontSize: 16,
        },
        headerShadowVisible: false,
    }}>
        <Stack.Screen
            name="index"
            options={{
                title: 'Fortschritt',
            }}
        />
        <Stack.Screen
            name="[id]"
            options={{
                title: 'Modal',
                presentation: 'formSheet',
                gestureDirection: 'vertical',
                animation: 'slide_from_bottom',
                sheetGrabberVisible: true,
            }}
        />
    </Stack>
    );
}