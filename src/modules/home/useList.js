// import get from "lodash/get";
import { useQuery } from "react-query";
import * as Api from "./api";
import * as Mappers from "./mapper";

const useList = () => {
    const { data, ...args } = useQuery(
        ["HOME", "list"],
        async () => {
            const { data } = await Api.List();

            // const items = Mappers.Books();

            return { items: data?.data };
        },
        { keepPreviousData: true, retry: false }
    );

    return { ...data, ...args };
};

export default useList;
