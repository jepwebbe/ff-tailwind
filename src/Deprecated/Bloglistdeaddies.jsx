
/*     const [apiData, setApiData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const result = await appService.GetDetails("/api/blogposts");
                console.log(result.data.data);
                setApiData(result.data.data);
            } catch (error) {
                console.error(error)
            }
        };
        getData();
    }, []) */
    /*     const sortBloglist = () => {
            const Sorted = [...apiData].sort((a, b) => { 
                return b.attributes.date - a.attributes.date
            })
            setApiData(Sorted)
    
        } */


    /*     let dateInt = apiData.attributes.date.replaceAll("-", "")
        console.log(dateInt)
        let dateSort = dateInt.sort((a, b) => a - b
        )
    
        console.log(dateSort) */