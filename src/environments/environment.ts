// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDOvMxFl__Kp0MbxOHB-otr2Xnf6hcIegk",
    authDomain: "mikael-sundstrom.firebaseapp.com",
    databaseURL: "https://mikael-sundstrom.firebaseio.com",
    projectId: "mikael-sundstrom",
    storageBucket: "mikael-sundstrom.appspot.com",
    messagingSenderId: "874726128525"
  }
};
