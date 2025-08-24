import {useState , useEffect} from "react"
import './App.css';
import './styles.css'
import Search from './components/search.jsx'
import Weather from './components/weather.jsx'
function App() {
  const [searchValue,setSearchValue] = useState("bengaluru");
  const [loading,setLoading] = useState(false);
  const [data,setData] = useState();
  const [error,setError] = useState(null);

  const date = new Date();
  const week = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const month = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

  const fetchData = async() => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=baadfc07fc7149eba087b2b045f8b5fd`
    try{
      setLoading(true)
      setError(null)
      const response = await fetch(url);
      if(!response.ok){
        throw new Error("City not found !")
      }
      const responseData = await response.json();
      setData(responseData);
      setLoading(false)
    }
    catch(e){
      setError(e.message);
    }
  }

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  },[])

  const handleSubmit = () => {
    fetchData();
  }
  return (
    <div className="App">
      <div className='container'>
        <Search searchValue={searchValue} setSearchValue={setSearchValue} handleSubmit={handleSubmit}/>
        <Weather data={data} date={date} week={week} month={month} loading={loading} error={error}/>
      </div>
    </div>
  );
}

export default App;
