import "./sass/main.scss";

import { configRefs, resultRefs, createRefs } from "./js/refs";

import setInitialState from "./js/initial-state";
import changeProviderValue from "./js/change-provider-value";
import changeProviderPrice from "./js/change-provider-price";
import eventsListeners from "./js/events-listeners";

import Config from "./tpl/tpl.Config";
import Result from "./tpl/tpl.Result";

// View config
configRefs.configBlock.innerHTML = Config();

// View result
resultRefs.resultBlock.innerHTML = Result();

// Creates refs
createRefs();

// Set initial state
setInitialState();

// Changes provider value
changeProviderValue();

// Changes provider price
changeProviderPrice();

// Adds events listeners
eventsListeners();
