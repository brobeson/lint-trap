//const core = require('@actions/core');
//const github = require('@actions/github');

//try {
//  const results_file = core.getInput('results-file');
//  console.log(`Hello ${nameToGreet}!`);
//  const time = (new Date()).toTimeString();
//  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
//  const payload = JSON.stringify(github.context.payload, undefined, 2)
//  console.log(`The event payload: ${payload}`);
//} catch (error) {
//  core.setFailed(error.message);
//}

function load_results(results_file) {
  const data = require(results_file)
  return data
}
