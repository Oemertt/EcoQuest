import { useClerk } from '@clerk/clerk-expo';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import { Alert, StyleSheet, TouchableOpacity } from 'react-native';

export const SignOutButton = () => {
  const { signOut } = useClerk()
  const router = useRouter()

  const handleSignOut = async () => {
    try {
      await signOut()
      router.replace('/(auth)/sign-in')
    } catch (err) {
      console.error('Sign out error:', JSON.stringify(err, null, 2))
      Alert.alert('Error', 'Failed to sign out. Please try again.')
    }
  }

  return (
    <TouchableOpacity onPress={handleSignOut}>
        <Ionicons name="log-out-outline" className='mt-2 mr-2' size={28} color="black" />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#dc3545',
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
})