import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const app = initializeApp(config.public.firebase)
  const firestore = getFirestore(app)

  return {
    provide: {
      firebaseApp: app,
      firestore
    }
  }
})
