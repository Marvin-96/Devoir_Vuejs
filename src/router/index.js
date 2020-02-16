import Vue from 'vue' // Stocker dans node.js 
import Router from 'vue-router' // Stocker dans node.js 
import HomePage from './../views/HomePage' // Importation de la page d'accueil


Vue.use(Router)

export default new Router ({
    routes: [
        { path: '/', component: HomePage },
        // { path: '/films', component: LesFilms },
        
    ]
})
