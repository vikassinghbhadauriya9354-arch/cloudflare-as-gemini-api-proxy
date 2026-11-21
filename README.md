# Cloudflare-as-gemini-api-proxy
Using cloudflare workers as a reverse proxy to pass through gemini api requests, beneficial for restricted IPs.

if your VPS/project uses shared IPs gemini might block requests: 
`400 FAILED_PRECONDITION: User location is not supported for the API use.`

### Setup:

1. **Create Worker:** Log in to your [Cloudflare Dashboard](https://dash.cloudflare.com/) and create a new Worker, Select 'Start with Hello World'.
2. **Upload Code:** Copy the `worker.js` code from this repo into the Worker editor.
3. **Deploy:** Hit "Save and Deploy."
4. **Update Endpoint:** Replace the Google API hostname with your new Worker URL.

### Before:
`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=YOUR_KEY`

### After:
`https://your-worker-name.your-subdomain.workers.dev/v1beta/models/gemini-2.5-flash:generateContent?key=YOUR_KEY`

## Note:
Dont use a proxy URL provided by someone else. > Deploy it on your own.
Using a third-party proxy allows the owner of that proxy to see and steal your Gemini API Key. Audit the worker.js file before deploying to ensure that no data is being sent to external servers.

For extra security you can set your API key as a Cloudflare [Environment Variable](https://developers.cloudflare.com/workers/configuration/secrets/) and have the Worker inject it into the request.
Figure that out yourself.
