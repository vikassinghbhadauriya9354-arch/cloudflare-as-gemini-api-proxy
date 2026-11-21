export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    url.hostname = "generativelanguage.googleapis.com";
    
    const newRequest = new Request(url.toString(), {
      method: request.method,
      headers: request.headers,
      body: request.body,
      redirect: 'follow'
    });

    return await fetch(newRequest);
  },
};
