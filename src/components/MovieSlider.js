import tesciowe3 from '../assets/films/tesciowe3.jpg'
import downtownabby from '../assets/films/downtownabby.jpg'
import obecnosc4 from '../assets/films/obecnosc4.jpg'
import skarpetki2 from '../assets/films/skarpetki2.jpg'
import './MovieSlider.css'

function MovieSlider(){
    return (
        <div className="slider">
            <div className="sliderCard">
                <div className="sliderContent">
                    <div className="sliderImg">
                        <img src={tesciowe3} alt='plakat teściowe' />
                    </div>
                    <div className='sliderInfo'>
                        <strong>TEŚCIOWE 3</strong>
                        <div className='sliderTags'>
                            <em>Komedia</em>
                            <em>od lat 15</em>
                            <em>90 min</em>
                            <em>Polska (2025)</em>
                        </div>
                        <div className='sliderScreenings'>
                            <div className='sliderTicket'>
                                <a href='#' className='sliderTicketHour'>16:00</a>
                                <a href='#' className='sliderTicketBuy'>Kup bilet</a>
                            </div>
                            <div className='sliderTicket'>
                                <a href='#' className='sliderTicketHour'>18:00</a>
                                <a href='#' className='sliderTicketBuy'>Kup bilet</a>
                            </div>
                            <div className='sliderTicket'>
                                <a href='#' className='sliderTicketHour'>20:15</a>
                                <a href='#' className='sliderTicketBuy'>Kup bilet</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sliderCard">
                <div className="sliderContent">
                    <div className="sliderImg">
                        <img src={downtownabby} alt='plakat downtown abby' />
                    </div>
                    <div className='sliderInfo'>
                        <strong>DOWNTON ABBEY. WIELKI FINAŁ</strong>
                        <div className='sliderTags'>
                            <em>Obyczajowy</em>
                            <em>od lat 13</em>
                            <em>122 min</em>
                            <em>USA, Wielka Brytania (2025)</em>
                        </div>
                        <div className='sliderScreenings'>
                            <div className='sliderTicket'>
                                <span className='sliderTicketCaptions'>napisy</span>
                                <a href='#' className='sliderTicketHour'>16:30</a>
                                <a href='#' className='sliderTicketBuy'>Kup bilet</a>
                            </div>
                            <div className='sliderTicket'>
                                <span className='sliderTicketCaptions'>napisy</span>
                                <a href='#' className='sliderTicketHour'>19:00</a>
                                <a href='#' className='sliderTicketBuy'>Kup bilet</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sliderCard">
                <div className="sliderContent">
                    <div className="sliderImg">
                        <img src={obecnosc4} alt='plakat obecność 4' />
                    </div>
                    <div className='sliderInfo'>
                        <strong>OBECNOŚĆ 4: OSTATNIE NAMASZCZENIE</strong>
                        <div className='sliderTags'>
                            <em>Horror</em>
                            <em>od lat 15</em>
                            <em>130 min</em>
                            <em>USA (2025)</em>
                        </div>
                        <div className='sliderScreenings'>
                            <div className='sliderTicket'>
                                <span className='sliderTicketCaptions'>napisy</span>
                                <a href='#' className='sliderTicketHour'>17:45</a>
                                <a href='#' className='sliderTicketBuy'>Kup bilet</a>
                            </div>
                            <div className='sliderTicket'>
                                <span className='sliderTicketCaptions'>napisy</span>
                                <a href='#' className='sliderTicketHour'>20:30</a>
                                <a href='#' className='sliderTicketBuy'>Kup bilet</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sliderCard">
                <div className="sliderContent">
                    <div className="sliderImg">
                        <img src={skarpetki2} alt='plakat skarpetek 2' />
                    </div>
                    <div className='sliderInfo'>
                        <strong>NIESAMOWITE PRZYGODY SKARPETEK 2.</strong>
                        <div className='sliderTags'>
                            <em>Animacja</em>
                            <em>od lat 4</em>
                            <em>55 min</em>
                            <em>Polska, Portugalia (2025)</em>
                        </div>
                        <div className='sliderScreenings'>
                            <div className='sliderTicket'>
                                <a href='#' className='sliderTicketHour'>16:15</a>
                                <a href='#' className='sliderTicketBuy'>Kup bilet</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieSlider