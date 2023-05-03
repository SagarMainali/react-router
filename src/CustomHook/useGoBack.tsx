import { useNavigate } from "react-router-dom";

function useGoBack(value: number) {
     const navigate = useNavigate()

     const goBack = (): void => {
          navigate(value)
     }

     return goBack
}

export default useGoBack