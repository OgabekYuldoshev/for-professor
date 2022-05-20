import axios from "axios";
import { config } from "../../../config"

export const List = () => axios.get(`${config.app.baseUrl}/api/members`);

