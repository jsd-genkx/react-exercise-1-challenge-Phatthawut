import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Page01 from "./components/1.2_pages/Page01.jsx";
import Layout from "./components/Layout.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "",
				element: <App />,
			},
		],
	},
	{
		path: "/page02",
		element: <Home />,
	},
	{
		path: "/page01",
		element: <Page01 />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
