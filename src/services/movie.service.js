import ApiClientWithToken from "../api/axiosClient";

export default {
  fetchTrending(queryParameters) {
    return ApiClientWithToken.get(`/trending/all/week`, {
      params: queryParameters,
    });
  },
};


