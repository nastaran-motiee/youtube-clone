import axios from "axios";
const KEY = "AIzaSyAZOFwqItaqkL6AVyNPRwsjSUtKmQKz9_s";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        type: 'video',
        q: "surfing",
        key: KEY
    }
});
