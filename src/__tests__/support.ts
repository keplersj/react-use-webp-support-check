jest.mock("supports-webp", () => Promise.resolve(true));

import { renderHook } from "@testing-library/react-hooks";
import { useWebPSupportCheck } from "..";

describe("useWebPSupportCheck", () => {
  describe("when WebP is supported", () => {
    it("returns true", async () => {
      const { result, waitForNextUpdate } = renderHook(() =>
        useWebPSupportCheck()
      );
      await waitForNextUpdate();

      expect(result.current).toBe(true);
    });
  });
});
