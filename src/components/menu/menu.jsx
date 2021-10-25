import { bot } from '../chat'
import './assents/menu.css'
export function Menu (){
    return (
        <nav id="menu-h">
        <div id="imagem">
            <h1>FilmFlix   &copy;</h1>
            </div>
        <ul>
            <li>
            </li>

            <li><a >Projeto </a></li>
            <li><a >Quem Somos</a></li>
            <li><a onClick={() => bot()}>Bot</a></li>
            <li><a>Entrar</a></li>
        </ul>
    </nav>
    )
}