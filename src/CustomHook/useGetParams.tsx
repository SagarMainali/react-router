import { useParams } from "react-router-dom";

function useGetParams() {
     const param = useParams()
     return param.id
}

export default useGetParams
