addEventListener("fetch", (event) => {
  event.respondWith(
    new Response("思い出のデブ", {
      status: 200,
      headers: {
        server: "denosr",
        "content-type": "text/plain; charset=UTF-8",
      },
    })
  );
});
