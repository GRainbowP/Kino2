import tesciowe3 from '../assets/films/tesciowe3.jpg'
import './MovieSlider.css'

function MovieSlider(){
    return (
        <div className="slider">
            <div className="sliderCard">
                <div className="sliderContent">
                    <div className="sliderImg">
                        <img src={tesciowe3} />
                    </div>
                    <div className='sliderInfo'>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieSlider