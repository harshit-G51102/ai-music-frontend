import { useEffect,useState } from "react";
import { createRecommendation } from "../api";


const Home = () => {
    const [data, setData] = useState("");
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await createRecommendation();
                setData(data);
            } catch (err) {
                console.error("Failed to fetch recommendations");
            }
        };
        fetchData();
    }, []);

    return <>
    <h1>hello</h1>
    <p>{data.message}</p>
    </>
}

export default Home;