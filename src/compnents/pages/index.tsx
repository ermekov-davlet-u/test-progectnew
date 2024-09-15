import { StrictMode } from "react"
import * as ReactDOM from "react-dom/client";
import {
	createBrowserRouter,
	RouterProvider,
	Link
} from "react-router-dom";
import Sidebar from "../common/Sidebar";
import Custompage from "./Customer";
import "./page.css"
import MainPage from "./Main";

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainPage />
	},
	{
		path: "/customer",
		element: <Custompage />,
	}
]);

function Page() {
	return (
		<StrictMode>
			<Sidebar />
				<RouterProvider router={router} />
		</StrictMode>
	);
}

export default Page;