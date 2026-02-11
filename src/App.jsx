import './App.css'
import { Routes, Route } from 'react-router'
import MainPage from './pages/MainPage'
import NotFoundPage from './pages/NotFoundPage'
import ProjectsPage from './pages/ProjectsPage'
import ArticlesPage from './pages/ArticlesPage'
import GenerateArticle from './pages/GenerateArticle'

function App() {

  return (
    <Routes>
      <Route path='/' element={ <MainPage/>}/>
      <Route path='/projects' element={ <ProjectsPage/>}/>
      <Route path='/articles' element={ <ArticlesPage/>}/>
      <Route path='/links' element={ <ArticlesPage/>}/>
      <Route path='/dashboard' element={ <GenerateArticle/>}/>
      <Route path='*' element={ <NotFoundPage/>}/>
    </Routes>
  )
}

export default App
