import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "src/App";
import ErrorPage from "src/ErrorPage/ErrorPage";
import PetDetails from "src/components/Pets/PetDetails";

function AppRoute() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "details/:petId",
          element: <PetDetails />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default AppRoute;
