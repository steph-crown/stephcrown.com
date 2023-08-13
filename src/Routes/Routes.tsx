import { AppRoutes } from 'Constants'
import { PagesLayout } from 'Layouts'
import { Articles, Courses, Home, Projects, Socials, Tools } from 'Pages'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const RoutesSwitches = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* all routes here use the Pages layout. This layout contains the suspense for this set of routes.  */}
        <Route path='/' element={<PagesLayout />}>
          <Route path='/' element={<Home />} />
          <Route path={AppRoutes.Articles} element={<Articles />} />
          <Route path={AppRoutes.Courses} element={<Courses />} />
          <Route path={AppRoutes.Projects} element={<Projects />} />
          <Route path={AppRoutes.Socials} element={<Socials />} />
          <Route path={AppRoutes.Tools} element={<Tools />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesSwitches
