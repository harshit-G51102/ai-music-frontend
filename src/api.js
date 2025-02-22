const API_URL = import.meta.env.VITE_API_URL;

export const createRecommendation = async () => {
    try {
        const response = await fetch("https://ai-music-backend.vercel.app/api/music", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        });

        // Log the response before parsing JSON
        console.log("Raw Response:", response);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Parsed Data:", data);
        return data;

    } catch (error) {
        console.error("Error in music API:", error);
        throw error;
    }
};

export const Recommendations = async (query) => {
    try{
        const response = await fetch(`https://ai-music-backend.vercel.app/api/recommend`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({query})
        });

        if(!response.ok){
            throw new Error("Failed to fetch recommendations");
        }
        return await response.json();

    }
    catch (error){
        console.error("Error in createRecommendation: ", error);
        throw error;
    }
};
