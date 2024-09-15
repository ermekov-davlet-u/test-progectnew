import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddUser from './compnents/common/Adduser';
import ListTable from './compnents/common/ListTable';
import Sidebar from './compnents/common/Sidebar';
import * as ReactDOM from "react-dom/client";
import MainPage from './compnents/pages';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);

function App() {
  return (
    <div className="app">
      <MainPage />
    </div>
  );
}

export default App;
