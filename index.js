/**
 * @format
 */

import { AppRegistry } from 'react-native'
import Routes from './src/routes'
import { createAppContainer } from "react-navigation"
import { name as appName } from './app.json'

const App = createAppContainer(Routes.routes)

AppRegistry.registerComponent(appName, () => App);
