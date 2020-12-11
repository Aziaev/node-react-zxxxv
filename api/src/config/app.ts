export const {
  NODE_ENV = "development",
  APP_PORT = 5000,
  APP_HOSTNAME = "localhost",
  APP_PROTOCOL = "http",
} = process.env;

export const IN_PROD = NODE_ENV === "production";
export const APP_ORIGIN = `${APP_PROTOCOL}://${APP_HOSTNAME}:${APP_PORT}`;
export const APP_SECRET =
  "23m4m34k238dm544509ds1k54ns65ol234janasj34j542n23mafhjblaj54j649akvcn";
