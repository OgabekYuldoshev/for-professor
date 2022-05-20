// import get from "lodash/get";
import { useQuery } from "react-query";
import * as Api from "./api";
import * as Mappers from "./mapper";

const useList = () => {
    const { data, ...args } = useQuery(
        ["PROJECTS", "list"],
        async () => {
            const { data } = await Api.List();

            const items = Mappers.Projects(data?.data);

            return { items };
        },
        { keepPreviousData: true, retry: false }
    );

    return { ...data, ...args };
};

export default useList;
