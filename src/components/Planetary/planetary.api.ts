import Api from "../../services/Utility/api";
import { IPlanetary } from "../../utils/type";

const getPlanetaryPosts = async () => {
    const response = await Api.get<IPlanetary[]>('/planetary/apod?api_key=2bbPomPTSAUD953wb5F2XmkOm6gKdzvgIa5ctopp&');
    return response.data;

}
export { getPlanetaryPosts };


