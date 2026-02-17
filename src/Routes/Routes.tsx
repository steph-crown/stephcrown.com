import { Articles, Contact, Courses, Credits, Home, Experience, Projects, Resume, Socials, Tools } from 'Pages'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { APP_ROUTES } from 'Constants'
import { PortfolioLayout } from 'Layouts'

const RoutesSwitches = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PortfolioLayout />}>
          <Route path='/' element={<Home />} />
          <Route path={APP_ROUTES.Experience} element={<Experience />} />
          <Route path={APP_ROUTES.Articles} element={<Articles />} />
          <Route path={APP_ROUTES.Resume} element={<Resume />} />
          <Route path={APP_ROUTES.Contact} element={<Contact />} />
          <Route path={APP_ROUTES.Projects} element={<Projects />} />
          <Route path={APP_ROUTES.Courses} element={<Courses />} />
          <Route path={APP_ROUTES.Socials} element={<Socials />} />
          <Route path={APP_ROUTES.Tools} element={<Tools />} />
          <Route path={APP_ROUTES.Credits} element={<Credits />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesSwitches
