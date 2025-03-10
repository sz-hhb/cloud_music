import { lazy } from 'react'
import { Navigate } from "react-router-dom"
import type { RouteObject } from "react-router-dom"

// 路由的懒加载
const Discover = lazy(() => import("@/views/discover"))
const Songs = lazy(() => import("@/views/discover/c-views/songs"))
const Ranking = lazy(() => import("@/views/discover/c-views/ranking"))
const Recommend = lazy(() => import("@/views/discover/c-views/recommend"))
const Artist = lazy(() => import("@/views/discover/c-views/artist"))
const Djradio = lazy(() => import("@/views/discover/c-views/djradio"))
const Album = lazy(() => import("@/views/discover/c-views/album"))

const Download = lazy(() => import("@/views/download"))
const Focus = lazy(() => import("@/views/focus"))
const Mine = lazy(() => import("@/views/mine"))

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/discover" />
  },
  {
    path: "/discover",
    element: <Discover />,
    children: [
      {
        path: "/discover",
        element: <Navigate to="/discover/recommend" />
      },
      {
        path: "/discover/recommend",
        element: <Recommend />
      },
      {
        path: "/discover/songs",
        element: <Songs />
      },
      {
        path: "/discover/ranking",
        element: <Ranking />
      },
      {
        path: "/discover/artist",
        element: <Artist />
      },
      {
        path: "/discover/djradio",
        element: <Djradio />
      },
      {
        path: "/discover/album",
        element: <Album />
      }
    ]
  },
  {
    path: "/download",
    element: <Download />
  },
  {
    path: "/focus",
    element: <Focus />
  },
  {
    path: "/mine",
    element: <Mine />
  }
]

export default routes
