import { lazy, Suspense } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";

const LazyHomePage = lazy(() => import('../pages/HomePage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));


export const applicationRoute = createBrowserRouter([
	{
		path: "/",
		element: <Suspense><LazyHomePage /></Suspense>
	},



	{
		path: '*',
		element: <Navigate to="not-found" replace />,
	},
	{
		path: 'not-found',
		element: <Suspense><NotFoundPage /></Suspense>
	}
]);