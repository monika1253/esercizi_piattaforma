import { useRef, useEffect } from "react";

function FirstModeEffect() {
  const hasMountedRef = useRef(false);

  useEffect(() => {
    if (!hasMountedRef.current) {
      console.log("Component mounted for the first time.");
      hasMountedRef.current = true;
    }
  }, []);
  return <p>StrictMode</p>;
}

export default FirstModeEffect;
