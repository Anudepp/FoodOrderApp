/*

Things to consider while writing a custom hook:
1. Name of the hook should start with use
2. what is input to the hook
3. what is the output of the hook
*/

import { useEffect, useState } from "react";


const useOnlineStatus = () => {
  const [onlineStatus, setonlineStatus] = useState(true);

  useEffect(() => { 

    window.addEventListener("online", () => {
      setonlineStatus(true);
    });

    window.addEventListener("offline", () => {
      setonlineStatus(false);
    });

  }, []);

  return onlineStatus;
}


export default useOnlineStatus;