import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { MainPage } from "./pages/MainPage/MainPage";
import { GlobalStyles } from "./utils/GlobalStyles";

function App() {
	const routerConfig = createBrowserRouter([
		{
			path: "/",
			element: <MainPage />,
		},
	]);

	return (
		<div className="App">
			<GlobalStyles />
			<RouterProvider router={routerConfig} />
		</div>
	);
}

export default App;
