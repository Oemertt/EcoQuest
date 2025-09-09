// @ts-nocheck
import { Toast, ToastDescription, ToastTitle } from "@/components/ui/toast";
import { Image, Platform, View } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const imageMap = {
    1: require('@/assets/images/level1.webp'),
    2: require('@/assets/images/level2.webp'),    
    3: require('@/assets/images/level3.webp'),
    4: require('@/assets/images/level4.webp'),
    5: require('@/assets/images/level5.webp'),
};

const ToastForLevelUp = ({id, level}) => {
    const insets = useSafeAreaInsets();
    // Berechne den top margin für Android basierend auf SafeAreaInsets
    const androidTopMargin = Platform.OS === 'android' ? insets.top + 10 : 0;
    const imageSource = imageMap[level];
    return (
        <View style={{ marginTop: androidTopMargin }}>
            <Toast
                nativeID={id}
                className="px-7 py-3 gap-4 shadow-soft-1 items-center flex-row bg-white mx-4"
            >
                <Image
                        source={imageSource}
                        className="w-16 h-16 rounded-[20px]"
                    />
                <View className="flex-col">
                    <ToastTitle size="lg" className="text-zinc-700">Level Up!</ToastTitle>
                    <ToastDescription className="text-zinc-500">Du bist ein Held!</ToastDescription>
                </View>
            </Toast>
        </View>
    );
}

export default ToastForLevelUp;