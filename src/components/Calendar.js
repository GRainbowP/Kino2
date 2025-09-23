import './Calendar.css';

function Calendar() {
    return (
        <div className='calendar'>
            <h2 className='calendarTitle'>Wybierz interesujący Cię dzień</h2>
            <div className='calendarDays'>
                <div className='calendarDay'>
                    <a href='#'>
                        <div className='calendarDayCard calendarDay-white'>
                            <b>WTO</b>
                            <br/>
                            <small>23 WRZ</small>
                        </div>
                    </a>
                    <a href='#'>
                        <div className='calendarDayCard'>
                            <b>ŚRO</b>
                            <br/>
                            <small>24 WRZ</small>
                        </div>
                    </a>
                    <a href='#'>
                        <div className='calendarDayCard'>
                            <b>CZW</b>
                            <br/>
                            <small>25 WRZ</small>
                        </div>
                    </a>
                    <a href='#'>
                        <div className='calendarDayCard'>
                            <b>PIĄ</b>
                            <br/>
                            <small>26 WRZ</small>
                        </div>
                    </a>
                    <a href='#'>
                        <div className='calendarDayCard'>
                            <b>SOB</b>
                            <br/>
                            <small>27 WRZ</small>
                        </div>
                    </a>
                    <a href='#'>
                        <div className='calendarDayCard'>
                            <b>NIE</b>
                            <br/>
                            <small>28 WRZ</small>
                        </div>
                    </a>
                    <a href='#'>
                        <div className='calendarDayCard'>
                            <b>PON</b>
                            <br/>
                            <small>29 WRZ</small>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Calendar