import logoStylowy from '../assets/logo_org.svg'
import logoDolby from '../assets/logo-dolby.svg'
import './Header.css'

function Header() {
    return (
        <div className='header'>
            <div className="headerImg">
                <img src={logoStylowy} />
                <img src={logoDolby} />
            </div>
            <div className='headerLinks'>
                <a href='#'>Repertuar</a>
                <a href='#'>Zapowiedzi</a>
                <a href='#'>Szkoły</a>
                <a href='#'>Oferta</a>
                <a href='#'>Cennik</a>
                <a href='#'>Wydarzenia</a>
                <a href='#'>Aktualności</a>
                <a href='#'>Kino</a>
            </div>
        </div>
    )
}

export default Header