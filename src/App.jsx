import Lost from "./Lost"
import Details from "./components/Details"
import Header from "./components/Header"
import Section from "./components/Section"
import { Route, BrowserRouter, Routes } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Section />} />
        <Route path="/details/:countryId" element={<Details />} />
        <Route path="*" element={<Lost />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App