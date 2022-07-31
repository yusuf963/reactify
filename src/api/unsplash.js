import axios from "axios";

const call_config = {
  base_url: "https://api.unsplash.com",
  acess_key: "tdJmdo0XwlxZqcfU1d6BSmNrwwPbHaUab7Zi0XXYsKc",
};
export default axios.create({
  baseURL: call_config.base_url,
  headers: {
    Authorization: `Client-ID ${call_config.acess_key}`,
  },
});
