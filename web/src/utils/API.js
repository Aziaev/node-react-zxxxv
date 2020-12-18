import { HttpError } from "./errors";

export const HTTPStatuses = {
  400: 400,
  401: 401,
  404: 404,
  422: 422,
  500: 500,
};

export const HTTPStatusesMap = {
  [HTTPStatuses[400]]: "Bad Request",
  [HTTPStatuses[401]]: "Unauthorized",
  [HTTPStatuses[404]]: "Not Found",
  [HTTPStatuses[422]]: "Unprocessable Entity",
  [HTTPStatuses[500]]: "Server error",
};

const API = {
  get(params) {
    const { url } = params;

    return async () => {
      const response = await fetch(url);
      const { status, statusText } = response;
      const data = await response.json();
      if (HTTPStatusesMap[status]) {
        throw new HttpError({ message: statusText, status });
      }
      return data;
    };
  },
  post(params) {
    const {
      url,
      headers = { "Content-Type": "application/json;charset=utf-8" },
      body,
    } = params;

    return async () => {
      const response = await fetch(url, {
        method: "POST",
        headers,
        body: JSON.stringify(body),
      });
      const { status, statusText } = response;
      const result = await response.json();

      if (HTTPStatusesMap[status]) {
        throw new HttpError({
          status,
          statusText: statusText,
          message: result && result.message,
        });
      }
      return result;
    };
  },
};

export default API;
