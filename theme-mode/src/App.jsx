import './App.css'
import Content from './components/Content'
import Header from './components/Header'
import Top from './components/Top'
import { useTheme } from './context/ThemeContext'
import ThemeProvider from './context/ThemeContext'

function App() {
  return (
   <ThemeProvider>
    <ThemedApp />
   </ThemeProvider>
  )
}

const ThemedApp = () => {
  const { theme } = useTheme()

  return (
    <div className={`app ${theme}`}>
      <Header />
      <Content /> 
      <Top />
    </div>
  )
}

export default App