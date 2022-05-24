// import get from "lodash/get";
import { useQuery } from "react-query";
import * as Api from "./api";

const useList = ({ params }) => {
    const { data, ...args } = useQuery(
        ["PUBLICATION", "listWithTable", params],
        async () => {
            const { data } = await Api.ListWithTable({ params });

            return { items: data?.data || [] };
        },
        { keepPreviousData: true }
    );

    return { ...data, ...args };
};

export default useList;
