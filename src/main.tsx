document.title = "Hello World!";
document.addEventListener("readystatechange", () => {
    if (document.readyState === 'complete') {
        console.info('App started.');
        document.body.append(<div style={{ color: "red" }}>Hello World!</div>);
    }
});
