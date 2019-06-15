/**
 * @format
 */

import { AppRegistry } from 'react-native'
import Routes from './src/routes'
import { createAppContainer } from "react-navigation"
import { name as appName } from './app.json'

const App = createAppContainer(Routes.routes)
import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyBx7BJr64PyjrB9Nhh3xdZgxeuZTX7QBuE",
    authDomain: "quiz-f043e.firebaseapp.com",
    databaseURL: "https://quiz-f043e.firebaseio.com",
    projectId: "quiz-f043e",
    storageBucket: "quiz-f043e.appspot.com",
    messagingSenderId: "281101740362",
    appId: "1:281101740362:web:d0fd411bbd773c7e"
}
// Initialize Firebase
firebase.initializeApp(config)

AppRegistry.registerComponent(appName, () => App)
