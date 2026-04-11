


const WeatherCard = () => {
    return (
        <div className="weather-card">
            <div className="weather-header">
                <span>Prague</span>
                <span>Czech Republic</span>
            </div>

            <h2 className="time">14:00</h2>

            <button className="btn small">Hourly forecast</button>

            <p className="date">13.10.2023  Friday</p>

            <div className="icon"></div>

            <h3 className="temp">22</h3>

            <div className="weather-actions">
                <img src="" alt="" />
                <img src="" alt="" />
                <button className="btn">See more</button>
                <img src="" alt="" />
            </div>
        </div>
    );
};

export default WeatherCard;