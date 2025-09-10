// @ts-nocheck
import { Toast, ToastDescription, ToastTitle } from "@/components/ui/toast";
import { Image } from 'expo-image'; // <--- hier
import { Platform, View } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const imageMap = {
    2: require('@/assets/images/level2_compressed.webp'),
    3: require('@/assets/images/level3_compressed.webp'),
    4: require('@/assets/images/level4_compressed.webp'),
    5: require('@/assets/images/level5_compressed.webp'),
};

const ToastForLevelUp = ({id, level}) => {
    const insets = useSafeAreaInsets();
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
                    style={{ width: 64, height: 64, borderRadius: 32 }}
                    contentFit="cover"
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
