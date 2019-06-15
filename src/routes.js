import { createStackNavigator } from 'react-navigation'

import cadastro from './pages/cadastro'
import autenticacao from './pages/autenticacao'
import menu from './pages/menu'
import quiz from './pages/quiz'

const routes = createStackNavigator({
    cadastro: {
        screen: cadastro,
        navigationOptions: {
            title: 'Cadastre-se',
            header: null,
        }
    },
    autenticacao: {
        screen: autenticacao,
        navigationOptions: {
            title: 'Faça Login no App',
            header: null,
        }
    },
    menu: {
        screen: menu,
        navigationOptions: {
            title: 'Menu',
            header: null,
        },
    },
    quiz: {
        screen: quiz,
        navigationOptions: {
            title: 'Manda ver!',
            header: null,
        }
    }
})

module.exports = { routes }
