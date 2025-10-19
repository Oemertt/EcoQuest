// @ts-nocheck

import { Toast, ToastDescription, ToastTitle } from "@/components/ui/toast";
import { Image, Platform, View } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// Static image mapping for require statements
const imageMap = {
    'energiesparmodus.webp': require('@/assets/images/energiesparmodus.webp'),
    'dschungelkrieger.webp': require('@/assets/images/dschungelkrieger.webp'),    
    'aquaman.webp': require('@/assets/images/aquaman.webp'),
    'MuellBadge.webp': require('@/assets/images/MuellBadge.webp'),
    'MobilitaetBadge.webp': require('@/assets/images/MobilitaetBadge.webp'),
    'KonsumBadge.webp': require('@/assets/images/KonsumBadge.webp'),
};

// @ts-ignore
const ToastForBadge = ({id, title, description, src}) => {
    const insets = useSafeAreaInsets();
    // Berechne den top margin für Android basierend auf SafeAreaInsets
    const androidTopMargin = Platform.OS === 'android' ? insets.top + 10 : 0;
    
    // Get the image source from the static map
    const imageSource = imageMap[src]
    
    return (
        <View style={{ marginTop: androidTopMargin }}>
            <Toast
                nativeID={id}
                className="px-4 py-4 gap-4 shadow-soft-1 items-center flex-row bg-white mx-4"
            >
                <Image
                source={imageSource}
                style={{ width: 48, height: 48 }}
                />
                <View className="flex-col">
                    <ToastTitle size="lg" className="text-zinc-700">{title}</ToastTitle>
                    <ToastDescription className="text-zinc-500">{description}</ToastDescription>
                </View>
            </Toast>
        </View>
    );
}

export default ToastForBadge;