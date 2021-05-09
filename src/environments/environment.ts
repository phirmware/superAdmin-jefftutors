// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// const base_url = 'https://studykrib.herokuapp.com'
const base_url = 'http://localhost:5000'
export const environment = {
  production: false,
  // url: 'http://localhost:3000/api/admin/',
  // base: 'http://localhost:3000/api/',
  // url : 'https://jefftutors-node.nerdeveloper.now.sh/api/admin/',
  // base : 'https://jefftutors-node.nerdeveloper.now.sh/api/'
  url: `${base_url}/api/admin/`,
  base: `${base_url}/api/`
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
