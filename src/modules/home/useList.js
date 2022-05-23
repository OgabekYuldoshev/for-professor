// import get from "lodash/get";
import { useQuery } from "react-query";
import * as Api from "./api";

const useList = () => {
    const { data, ...args } = useQuery(
        ["HOME", "list"],
        async () => {
            const { data } = await Api.List();

            return { items: data?.data };
        },
        { keepPreviousData: true, retry: false }
    );

    return { ...data, ...args };
};

export default useList;
