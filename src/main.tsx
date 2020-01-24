document.title = "Hello World!";
document.addEventListener("readystatechange", () => {
    if (document.readyState === 'complete') {
        console.info('App started.');
        document.body.append(<nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#">
          <img src="/assets/Logo.png" width="30" height="30" class="d-inline-block align-top" alt="Logo" />
          typescript-webapp-starter
        </a>
      </nav>);
    }
});
