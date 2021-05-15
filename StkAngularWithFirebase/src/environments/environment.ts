// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //Configuración de la aplicación en FireBase.
  firebase: {
    /*apiKey: '<your-key>',
    authDomain: '<your-project-authdomain>',
    databaseURL: '<your-database-URL>',
    projectId: '<your-project-id>',
    storageBucket: '<your-storage-bucket>',
    messagingSenderId: '<your-messaging-sender-id>',
    appId: '<your-app-id>',
    measurementId: '<your-measurement-id>'*/
    //Nombre publico del proyecto: HomeShopSTK
    apiKey: "AIzaSyA5ZLeOHG-x8jip-wJG64wwjgMvJ6em45E",
    authDomain: "stkangular-41319.firebaseapp.com",
    projectId: "stkangular-41319",
    storageBucket: "stkangular-41319.appspot.com",
    messagingSenderId: "903189947996",
    appId: "1:903189947996:web:51f2a6f7df4116ea81a899"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
