import { getData } from "@/app/lib/api";

describe("getData", () => {
  const originalFetch = global.fetch;

  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    global.fetch = originalFetch;
  });

  it("should fetch data from the given endpoint", async () => {
    const mockData = { key: "value" };
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockData),
    });

    const endpoint = "/test-endpoint";
    const data = await getData(endpoint);

    expect(global.fetch).toHaveBeenCalledWith(
      `${process.env.NEXT_PUBLIC_API_URL}${endpoint}`
    );
    expect(data).toEqual(mockData);
  });

  it("should throw an error if the fetch fails", async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: false,
    });

    const endpoint = "/test-endpoint";

    await expect(getData(endpoint)).rejects.toThrow("Failed to fetch data");
  });
});
