# lint-trap

Read linter results and report them as commit comments.

## Required Inputs

| Input | Type | Description |
|:---|:---|:---|
| `results-file` | string | The path to the JSON file with the lint results. |

## Optinal Inputs

| Input | Type | Default | Description |
|:---|:---|:---|:---|
| `single-comment` | boolean | `false` | Make one comment with all the lint results. The default behavior  |
| `message-only` | boolean | `false` | Don't comment the raw JSON result(s). Instead, only comment the lint message. |
