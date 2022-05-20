// import get from "lodash/get";
import { useQuery } from "react-query";
import * as Api from "./api";
import * as Mappers from "./mapper";

const useList = () => {
    const { data, ...args } = useQuery(
        ["MEMBERS", "list"],
        async () => {
            const { data } = await Api.List();

            const items = Mappers.Memebers(data?.data);
            return { items };
        },
        { keepPreviousData: true, retry: false }
    );

    return { ...data, ...args };
};

export default useList;
