import axios from "axios";
import { config } from "../../../config"

export const List = ({ type }) => axios.get(`${config.app.baseUrl}/api/publications`, {
    params: {
        type_id: type
    }
});

