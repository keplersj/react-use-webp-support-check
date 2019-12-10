jest.mock("supports-webp", () => Promise.resolve(false));

import { renderHook } from "@testing-library/react-hooks";
import { useWebPSupportCheck } from "..";

describe("useWebPSupportCheck", () => {
  describe("when WebP isn't supported", () => {
    it("returns false", async () => {
      const { result, waitForNextUpdate } = renderHook(() =>
        useWebPSupportCheck()
      );
      await waitForNextUpdate();

      expect(result.current).toBe(false);
    });
  });
});
