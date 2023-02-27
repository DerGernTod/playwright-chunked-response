# playwright-chunked-response
Reproducer repo for playwright bug in webkit not finishing a test if a chunked response is still running and har file should be recorded.

## How to use
* build ts: `npm run build`
* run server to host chunked file: `npm start`
* run playwright test: `npm test`

Running the playwright test shouldn't take longer than 2 seconds, but takes 30 seconds because on webkit, the context is only closed after the request is done.