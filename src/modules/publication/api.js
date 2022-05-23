import axios from "axios";
import { config } from "../../../config"

export const List = ({ params }) => axios.get(`${config.app.baseUrl}/api/publications`, {
    params: {
        year: params?.year || undefined,
        type_id: params?.type
    }
});

