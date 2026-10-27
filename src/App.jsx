import { useEffect, useState } from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import WorkDetail from './pages/WorkDetail'
import { getWork } from './data/work'

function readRoute() {
  const hash = window.location.hash || '#about'
  if (hash.startsWith('#/work/')) {
    return { page: 'work', slug: hash.replace('#/work/', '') }
  }
  return { page: 'home', anchor: hash.replace('#', '') || 'about' }
}

export default function App() {
  const [route, setRoute] = useState(readRoute())

  useEffect(() => {
    const onHashChange = () => setRoute(readRoute())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
    if (route.page === 'home' && route.anchor && route.anchor !== 'about') {
      requestAnimationFrame(() => {
        document.getElementById(route.anchor)?.scrollIntoView({ behavior: 'auto' })
      })
    }
  }, [route])

  return (
    <>
      <Header />
      {route.page === 'work' ? <WorkDetail work={getWork(route.slug)} /> : <Home />}
    </>
  )
}
