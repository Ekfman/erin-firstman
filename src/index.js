import App from "./App"
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from "react-dom/client"
import "./style.css"


const root = createRoot(document.getElementById("root"))
root.render(<BrowserRouter><App /></BrowserRouter>)