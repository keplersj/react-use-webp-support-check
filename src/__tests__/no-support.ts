jest.mock("supports-webp", () => Promise.resolve(false));

import { renderHook } from "@testing-library/react-hooks";
import { useWebPSupportCheck } from "..";

describe("useWebPSupportCheck", () => {
  describe("when WebP isn't supported", () => {
    it("returns false after update", async () => {
      const { result, waitForNextUpdate } = renderHook(() =>
        useWebPSupportCheck()
      );

      expect(result.current).toBe(false);

      await waitForNextUpdate();

      expect(result.current).toBe(false);
    });
  });
});
