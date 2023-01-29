import "./sass/main.scss";

import { resultRefs } from "./js/refs";

import setInitialState from "./js/initial-state";
import eventsListeners from "./js/events-listeners";

import Result from "./tpl/tpl.Result";

// Set initial state
setInitialState();

// Adds events listeners
eventsListeners();

// View result
resultRefs.resultBlock.innerHTML = Result();
