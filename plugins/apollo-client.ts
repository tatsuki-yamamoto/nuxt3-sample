// https://v4.apollo.vuejs.org/

import { defineNuxtPlugin } from "#app"
import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client/core"
import { DefaultApolloClient } from "@vue/apollo-composable"
import { onError } from '@apollo/client/link/error'
import { logErrorMessages } from '@vue/apollo-util'

export default defineNuxtPlugin((nuxtApp) => {

  // HTTP connection to the API
  const httpLink = createHttpLink({
    uri: 'http://localhost:3000/graphql',
  })

  // Handle errors
  const errorLink = onError(error => {
    if (process.env.NODE_ENV !== 'production') {
      logErrorMessages(error)
    }
  })

  const apolloClient = new ApolloClient({
    cache: new InMemoryCache(),
    link: errorLink.concat(httpLink),
  })
  nuxtApp.vueApp.provide(DefaultApolloClient, apolloClient)
})
