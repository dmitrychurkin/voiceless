import { useContext } from "react";
import { ApiContext } from "../providers/ApiProvider";

const useApi = () => useContext(ApiContext);

export default useApi;