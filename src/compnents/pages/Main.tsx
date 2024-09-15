import { StrictMode } from "react"
import * as ReactDOM from "react-dom/client";
import {
	createBrowserRouter,
	RouterProvider,
	Link
} from "react-router-dom";
import Sidebar from "../common/Sidebar";
import Custompage from "./Customer";

import PageWrapper from "../common/Pagewrapper";

const router = createBrowserRouter([
	{
		path: "/",
		element: <div>Hello world!</div>,
	},
	{
		path: "/customer",
		element: <Custompage />,
	}
]);

function MainPage() {
	return (
		<PageWrapper>
			Hello my main page
		</PageWrapper>
	);
}

export default MainPage;