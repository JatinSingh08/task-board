import axios from "axios";

const apiUrl = " https://gcp-mock.apiwiz.io/v1/tasks";
const apiKey = "b4349714-47c7-4605-a81c-df509fc7e653";

export const getTasksService = async () => {
  return axios.get(apiUrl, {
    headers: {
      "x-tenant": apiKey,
    },
  });
};
