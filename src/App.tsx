import { HelmetProvider } from 'react-helmet-async'
import RoutesSwitches from 'Routes/Routes'

function App() {
  return (
    <HelmetProvider>
      <RoutesSwitches />
    </HelmetProvider>
  )
}

export default App
