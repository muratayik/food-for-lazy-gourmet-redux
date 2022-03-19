import { useEffect } from "react";

// eslint-disable-next-line react-hooks/exhaustive-deps
const useEffectOnce = (param: any) => useEffect(param, []);

export default useEffectOnce;
