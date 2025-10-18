import { useOAuth } from '@clerk/clerk-expo'
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
  const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' })
  const router = useRouter()

  const onGoogleSignIn = useCallback(async () => {
    try {
      console.log('🔵 Starting Google OAuth Flow...')
      
      // Für Native Apps: Clerk verwendet automatisch die richtige Redirect URL
      const { createdSessionId, signIn, signUp, setActive } = await startOAuthFlow()

      console.log('🔵 OAuth Flow completed')
      console.log('🔵 createdSessionId:', createdSessionId)
      console.log('🔵 signIn status:', signIn?.status)
      console.log('🔵 signUp status:', signUp?.status)

      if (createdSessionId) {
        console.log('✅ Session created, setting active...')
        await setActive!({ session: createdSessionId })
        console.log('✅ Session set, redirecting...')
        router.replace('/')
      } else {
        // Versuche die Session aus signIn oder signUp zu holen
        const sessionId = signIn?.createdSessionId || signUp?.createdSessionId
        
        if (sessionId) {
          console.log('✅ Found session in signIn/signUp, setting active...')
          await setActive!({ session: sessionId })
          router.replace('/')
        } else {
          console.log('❌ No session created')
          console.log('signIn details:', JSON.stringify(signIn, null, 2))
          console.log('signUp details:', JSON.stringify(signUp, null, 2))
          Alert.alert('Fehler', 'Anmeldung fehlgeschlagen. Bitte versuche es erneut.')
        }
      }
    } catch (err: any) {
      console.error('❌ Google Sign-In Error:', err)
      console.error('❌ Error details:', JSON.stringify(err, null, 2))
      Alert.alert('Fehler', 'Anmeldung fehlgeschlagen. Bitte versuche es erneut.')
    }
  }, [startOAuthFlow, router])



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


