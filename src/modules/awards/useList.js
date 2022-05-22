// import get from "lodash/get";
import { useQuery } from "react-query";
import * as Api from "./api";
import * as Mappers from "./mapper";

const useList = ({ type }) => {
    const { data, ...args } = useQuery(
        ["AWARDS", "list", type],
        async () => {
            const { data } = await Api.List({ type });

            return { items: data?.data };
        },
        { keepPreviousData: true, retry: false }
    );

    return { ...data, ...args };
};

export default useList;
