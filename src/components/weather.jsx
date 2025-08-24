import React from 'react'

const Weather = ({data, date, week, month, loading, error}) => {
  return (
    <div>
      {
        error ? <div style={{color:"red"}}>{error}</div> : loading ? <div>Loading please wait ...</div>:<div className='weather-container'>
            <div className="city-name">{data?.name}, <span>{data?.sys?.country}</span></div>
            <div className="date"><span className='day'>{`${week[date.getDay()]} ${date.getDate()}, `}</span><span>{`${month[date.getMonth()]} ${date.getFullYear()}`}</span></div>
            <div className='temperature'>{`${data?.main?.temp}°C`}</div>
            <div className="desc">{data?.weather[0]?.description}</div>
            <div className="wind-humidity">
              <div className='wind'><span>{data?.wind?.speed}</span><br/>Wind</div>
              <div className="humidity"><span>{data?.main?.humidity}%<br/></span>Humidity</div>
            </div>
        </div>
        
      }
    </div>
  )
}

export default Weather
