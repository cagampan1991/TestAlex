import { Social } from "../types/SocialType";

const apiBaseUrl = process.env.REACT_APP_API_BASEURL;
const SocialService = {
  getSocials: () =>
    fetch(apiBaseUrl + "/social")
      .then((social) => social.json())
      .then(
        (data: Social[]) => {
          return data;
        },
        (error) => {
          return error;
        }
      ),
};

export default SocialService;
