import React from "react"
import ReactDOM from "react-dom/client"
import { App } from "./App.jsx"
import { BrowserRouter, Route, Routes } from "react-router"
import "./main.css"

const container = document.getElementById("root")
const root = ReactDOM.createRoot(container)
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
