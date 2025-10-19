import { Toast, ToastDescription, ToastTitle } from "@/components/ui/toast";
import { Coins } from "lucide-react-native";
import { Platform, View } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';


// @ts-ignore
const ToastExample = ({id, points}) => {
    const insets = useSafeAreaInsets();
    // Berechne den top margin für Android basierend auf SafeAreaInsets
    const androidTopMargin = Platform.OS === 'android' ? insets.top + 10 : 0;
    return (
        <View style={{ marginTop: androidTopMargin }}>
            <Toast
                nativeID={id}
                className="px-7 py-3 gap-4 shadow-soft-1 items-center flex-row bg-white mx-4"
            >
                <Coins size={20} color="#F59E0B" />
                <View className="flex-col">
                    <ToastTitle size="lg" className="text-zinc-700">{`Super, ${points} Punkte verdient`}</ToastTitle>
                    <ToastDescription className="text-zinc-500">Du bist ein Held!</ToastDescription>
                </View>
            </Toast>
        </View>
    );
}

export default ToastExample;