export class HttpError extends Error {
  constructor({ message, status, statusText }) {
    super(message);
    this.status = status;
    this.statusText = statusText;
  }
}

export function extractValidationErrors(error) {
  if (!error) {
    return null;
  }

  if (
    !error.message ||
    typeof error.message !== "string" ||
    !error.message.includes("ValidationError")
  ) {
    return null;
  }

  let message = error.message;
  message = message.replace("ValidationError: ", "");
  message = message.split(". ");
  message = message.reduce((result, messageString) => {
    const messageStringAsArray = messageString.split('" ');
    const key = messageStringAsArray[0].replace('"', "");
    const message = messageStringAsArray[1];
    if (result[key]) {
      return {
        ...result,
        [key]: Array.isArray(result[key])
          ? [...result[key], message]
          : [result[key], message],
      };
    }

    return { ...result, [key]: message };
  }, []);

  return message;
}
