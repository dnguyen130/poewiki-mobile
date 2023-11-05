import axios from "axios";

axios.defaults.baseURL = "https://www.poewiki.net/w/api.php";

interface SearchResultType {
  config: Record<string, any>
  data: Array<string>[]
  headers: Record<string, any>
  request?: XMLHttpRequest
  status: number
  statusText: string
}

export const Search_Function = async (searchString: string): Promise<SearchResultType> => {
  try {
    const result: SearchResultType = await axios.get("", {
      params: {
        origin: "*",
        action: "opensearch",
        search: searchString,
        limit: 10,
        format: "json",
      },
    })
    return result;
  } catch (err) {
    console.log(err);
    return {
      config: {},
      data: [],
      headers: {},
      status: -1,
      statusText: ''
    }
  }
}