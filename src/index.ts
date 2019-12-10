import { useState, useEffect } from "react";
import webPCheck from "supports-webp";

export function useWebPSupportCheck(): boolean {
  const [{ webP: supportsWebP }, setWebPSupport] = useState({ webP: false });

  useEffect(() => {
    const checkForSupport = async (): Promise<void> => {
      const browserSupportsWebP = await webPCheck;

      setWebPSupport({ webP: browserSupportsWebP });
    };

    checkForSupport();
  }, []);

  return supportsWebP;
}
