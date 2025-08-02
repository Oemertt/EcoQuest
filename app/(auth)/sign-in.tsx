import { useSSO } from '@clerk/clerk-expo'
import * as AuthSession from 'expo-auth-session'
import { Image } from "expo-image"
import { useRouter } from 'expo-router'
import * as WebBrowser from 'expo-web-browser'
import { useCallback, useEffect } from 'react'
import { Alert, Text, TouchableOpacity, View } from 'react-native'

// Hook für bessere Performance auf Android
export const useWarmUpBrowser = () => {
  useEffect(() => {
    void WebBrowser.warmUpAsync()
    return () => {
      void WebBrowser.coolDownAsync()
    }
  }, [])
}

// Wichtig: Handle auth sessions
WebBrowser.maybeCompleteAuthSession()

export default function SignInScreen() {
  useWarmUpBrowser()
  const { startSSOFlow } = useSSO()
  const router = useRouter()

  const onGoogleSignIn = useCallback(async () => {
    try {
      const { createdSessionId, setActive, signIn, signUp } = await startSSOFlow({
        strategy: 'oauth_google',
        redirectUrl: AuthSession.makeRedirectUri(),
      })

      if (createdSessionId) {
        // Erfolgreich angemeldet - Session setzen
        setActive!({ session: createdSessionId })
        router.replace('/')
      } else {
        // Falls zusätzliche Schritte erforderlich sind (z.B. MFA)
        console.log('Additional steps required:', { signIn, signUp })
        // Alert.alert('Authentication', 'Additional verification required')
      }
    } catch (err: any) {
      console.error('Google Sign-In Error:', JSON.stringify(err, null, 2))
      Alert.alert('Error', 'Sign-in failed. Please try again.')
    }
  }, [startSSOFlow, router])



return (
    <View className="flex-1 bg-white">
      <View className="flex-1 px-8 justify-between">
        <View className="flex-1 justify-center">
          {/* DEMO IMAGE */}
          <View className="items-center mb-5">
            <Text className="text-6xl font-sans text-green-700 tracking-wide">
              EcoQuest
            </Text>
            <Text className="text-base text-gray-600 italic">
              Deine Reise in eine grünere Zukunft beginnt hier
            </Text>
            {/* Füge dein bild hinzu */}
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
              onPress={onGoogleSignIn}
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


