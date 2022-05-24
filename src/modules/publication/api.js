import axios from "axios";
import { config } from "../../../config"

export const List = ({ type }) => axios.get(`${config.app.baseUrl}/api/publications`, {
    params: {
        type_id: type
    }
});


export const ListWithTable = ({ params }) => axios.get(`${config.app.baseUrl}/api/publication-with-table`, {
    params: {
        year: params?.year || undefined,
        type_id: params?.type
    }
});

