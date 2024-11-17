import { createRoot } from "react-dom/client";  
import App from "./App";
import "./styles/reset.css";
import "./styles/style.css"


const root = createRoot(document.querySelector(".root"));
root.render(<App />);


/*Importei no index os arquivos css, e não preciso mais linkar no html. Com isso, os caches vão funcionar melhor. Não preciso nomear o meu import do css */