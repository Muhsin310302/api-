export default function Main() {
    //cc743b6f7759485cbf2daa065e1adf50
    const [news, setNews] =usestate([])

    const getNews = async() =>{
        const response = await fetch('https://newsapi.org/v2/everything?q=last-of-us&apiKey=cc743b6f7759485cbf2daa065e1adf50')
        const data = await response.json()
        console.log(data)
    }

    useeffect(() =>{
        getNews()

    },[])

    return <h2>her kommer nyheter</h2>
}