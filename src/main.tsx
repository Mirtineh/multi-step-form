import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/configureStore";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <main>
        <App />
      </main>
      <footer>
        <div className="text-center text-marine-blue">
          <span>Challenge by </span>
          <a
            href="https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ"
            target="_blank"
            className="hover:cursor-pointer font-bold"
          >
            Frontend Mentor
          </a>
          . <span>Coded by </span>
          <a
            href="https://www.frontendmentor.io/profile/Mirtineh"
            className="hover:cursor-pointer font-bold"
          >
            Mirtineh
          </a>
          .
        </div>
      </footer>
    </Provider>
  </React.StrictMode>
);
