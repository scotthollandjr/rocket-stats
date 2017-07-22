// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBLKnLg1AYC9ysO9-9o-Y6s12W4EMHjHBc",
    authDomain: "rocket-stats.firebaseapp.com",
    databaseURL: "https://rocket-stats.firebaseio.com",
    projectId: "rocket-stats",
    storageBucket: "rocket-stats.appspot.com",
    messagingSenderId: "21571644968"
  }
};
