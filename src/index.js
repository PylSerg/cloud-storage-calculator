import "./sass/main.scss";

import { configRefs, resultRefs, createRefs } from "./js/refs";

import setInitialState from "./js/initial-state";
import eventsListeners from "./js/events-listeners";

import Config from "./tpl/tpl.Config";
import Result from "./tpl/tpl.Result";

// View config
configRefs.configBlock.innerHTML = Config();

// View result
resultRefs.resultBlock.innerHTML = Result();

// Create refs
createRefs();

// Set initial state
setInitialState();

// Adds events listeners
eventsListeners();
