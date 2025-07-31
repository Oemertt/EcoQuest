import { useSocialAuth } from "@/hooks/useSocialAuth";
import { Image } from "expo-image";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const { handleSocialAuth, isLoading } = useSocialAuth();

  return (
    <View className="flex-1 bg-white">
      <View className="flex-1 px-8 justify-between">
        <View className="flex-1 justify-center">
          {/* DEMO IMAGE */}
          <View className="items-center mb-5">
            <Text className="text-6xl font-serif text-green-600">
                EcoQuest
            </Text>
            <Text className="text-md text-gray-500">
                Deine Reise in eine grünere Zukunft beginnt hier
            </Text>
            
            <Image
              source={require("../../assets/images/auth2.gif")}
              className="size-96"
              style={{ width: 384, height: 384 }}
              contentFit="contain"
              placeholder="Loading..."
            />
            
          </View>

          <View className="flex-col gap-2">
            {/* GOOGLE SIGNIN BTN */}
            <TouchableOpacity
              className="flex-row items-center justify-center bg-white border border-gray-300 rounded-3xl mt-8 py-3 px-6"
              onPress={() => handleSocialAuth("oauth_google")}
              disabled={isLoading}
              style={{
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.1,
                shadowRadius: 2,
                elevation: 2,
              }}
            >
              
                <View className="flex-row items-center justify-center">
                  <Image
                    source={require("../../assets/images/Google.png")}
                    className=""
                    style={{ width: 40, height: 40, marginRight: 4}}
                    contentFit="contain"
                  />
                  <Text className="text-black font-medium text-base">Fortfahren mit Google</Text>
                </View>
              
            </TouchableOpacity>

            
             
          </View>

          
        </View>
      </View>
    </View>
  );
}
