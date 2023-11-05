import axios from "axios";

axios.defaults.baseURL = "https://www.poewiki.net/w/api.php";

export const Search_Function = async (searchString: string) => {
  try {
    const result = await axios.get("", {
      params: {
        origin: "*",
        action: "opensearch",
        search: searchString,
        limit: 10,
        format: "json",
      },
      headers: {
        'User-Agent': 'PoeWikiMobileBot/0.1.0, dannytnguyen.dev@gmail.com',
      },
    })
    return result;
  } catch (err) {
    console.log(err)
  }
}