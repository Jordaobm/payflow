/**
 * @format
 */

import { AppRegistry } from "react-native";

import { name as appName } from "./app.json";
import { App } from "./src";

if (Platform.OS === "android") {
  // only android needs polyfill
  require("intl"); // import intl object
  require("intl/locale-data/jsonp/pt-BR"); // load the required locale details
}

AppRegistry.registerComponent(appName, () => App);
