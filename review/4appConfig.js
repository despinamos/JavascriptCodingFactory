const appConfig = {
  appName: "JavaApp",
  version: "2.0.0",
  appEndpoints: {
    login: "/api/login",
    register: "/api/register"
  },
  isProduction: false
}

console.log(appConfig.appEndpoints.login)