import axios from "axios"
// KEY = 'AIzaSyCG54Zv4z3tGgtzhynjHxxSb61RsEkddZA'
// new KEY ='AIzaSyDGEpSeS2OYGmXSyUj15asHHSXqmsZ6gWc'
// docs  https://developers.google.com/youtube/v3/docs/search/list

const call_config = {
  base_url: 'https://www.googleapis.com/youtube/v3',
  KEY: 'AIzaSyDGEpSeS2OYGmXSyUj15asHHSXqmsZ6gWc'
}
export default axios.create({
  baseURL: call_config.base_url,
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    KEY: call_config.KEY
  }
})