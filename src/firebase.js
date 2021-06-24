import firebase from 'firebase'
import { ref, onUnmounted } from 'vue'

const config = {
    apiKey: "AIzaSyApXohdLxCUYXlorWGY9falmOH4qmZp4oY",
    authDomain: "agg-devtest.firebaseapp.com",
    projectId: "agg-devtest",
    storageBucket: "agg-devtest.appspot.com",
    messagingSenderId: "871115522288",
    appId: "1:871115522288:web:1f576d3eaa5cae62580235"
};

const firebaseApp = firebase.initializeApp(config)

const db = firebaseApp.firestore()
const optionsCollection = db.collection('options')

export const createOption = option => {
    return optionsCollection.add(option)
}

export const getOption = async id => {
    const option = await optionsCollection.doc(id).get()
    return option.exists ? option.data() : null
}

export const updateOption = (id, option) => {
    return optionsCollection.doc(id).update(option)
}

export const deleteOption = id => {
    return optionsCollection.doc(id).delete()
}

export const useLoadOptions = () => {
    const options = ref([])
    optionsCollection.onSnapshot(snapshot => {
        options.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    })
    onUnmounted(close)
    return options
}