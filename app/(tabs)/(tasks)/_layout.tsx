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
                    title: 'Aufgaben',
                }}
            />
            <Stack.Screen
                name="[id]"
                options={{
                    title: 'Aufgabe',
                }}
            />
        </Stack>

    );
}

export default Layout;