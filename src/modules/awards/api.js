import axios from "axios";
import { config } from "../../../config"

export const List = ({ type }) => axios.get(`${config.app.baseUrl}/api/awards`, {
    params: {
        type_id: type
    }
});

