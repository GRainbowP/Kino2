import './Calendar.css';

function Calendar() {
    return (
        <div className='calendar'>
            <h2 className='calendarTitle'>Wybierz interesujący Cię dzień</h2>
            <div className='calendarDays'>
                <div className='calendarDay'>
                    <a href='#'>
                        <div className='calendarDayCard calendarDay-white'>
                            <b>PON</b>
                            <br/>
                            <small>15 WRZ</small>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Calendar