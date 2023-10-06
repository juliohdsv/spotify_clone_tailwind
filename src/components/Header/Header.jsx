

export default function Header(){
    return(
        <div className="container-header flex fixed bg-black w-full px-3 md:px-20 py-4">
            <div>
                <a href="#"className="hover:text-hoverspt text-sm">
                    <img src="img/spotify-logo.png" alt="Logospotify" className="w-20 md:w-125px"/>
                </a>
            </div>
            <div className="flex justify-end flex-1 md:hidden text-white text-3xl">
                <i className="fas fa-bars"></i>
            </div>
            <div className="items-end flex-1 text-white font-bold hidden md:flex">
                <nav className="flex-1">
                    <ul className="flex justify-end flex-1">
                        <li className="ps-4">
                            <a href="#" className="hover:text-hoverspt text-sm">Premium</a>
                        </li>
                        <li className="ps-4">
                            <a href="#" className="hover:text-hoverspt text-sm">Ajuda</a>
                        </li>
                        <li className="ps-4">
                            <a href="#" className="hover:text-hoverspt text-sm">Baixar</a>
                        </li>
                        <li className="ps-4">
                            <span className="border-r border-white"></span>
                        </li>
                        <li className="ps-4">
                            <a href="#" className="hover:text-hoverspt text-sm">Inscrever-se</a>
                        </li>
                        <li className="ps-4">
                            <a href="#" className="hover:text-hoverspt text-sm">Log in</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}