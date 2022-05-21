// import get from "lodash/get";
import { useQuery } from "react-query";
import * as Api from "./api";
import get from "lodash/get"

const useList = () => {
    const { data, ...args } = useQuery(
        ["CONTACTS", "single"],
        async () => {
            const { data } = await Api.List();

            const item = get(data, "data[0]");

            return { item };
        },
        { keepPreviousData: true, retry: false }
    );

    return { ...data, ...args };
};

export default useList;
