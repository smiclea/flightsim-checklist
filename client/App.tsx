import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import AirbusChecklistContainer from './containers/AirbusChecklistContainer/AirbusChecklistContainer'

const theme = extendTheme({ config: { initialColorMode: 'dark' } })

const App = () => (
  <ChakraProvider resetCSS theme={theme}>
    <Router>
      <Switch>
        <Route path="/" exact>
          <AirbusChecklistContainer />
        </Route>
        <Route>Not Found</Route>
      </Switch>
    </Router>
  </ChakraProvider>
)

export default App
