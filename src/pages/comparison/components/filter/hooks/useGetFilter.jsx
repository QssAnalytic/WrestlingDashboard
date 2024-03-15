import useSWR from "swr";
import { filterEndpoints } from "../../../../../services/api/endpoints";
import { getData } from "../../../../../services/api/requests";

export default function useGetFilter() {
  const { data: countries } = useSWR(filterEndpoints.allYears, getData);
}
