# ErrorSnap SDK

The **ErrorSnap SDK** allows you to easily integrate ErrorSnap error tracking into your web application. Once integrated, your app will start sending error reports to the ErrorSnap platform for analysis, tracking, and resolution.

## 🚀 Instruction

- Copy the project id which you want to track error
- in your project **index.html** put this script
  `

```html
<script src="https://errorsnap-sdk.netlify.app/"></script>
<script>
  const app = new ErrorSnap({
     projectId: // enter your copied project,
   });

  app.initialize();
</script>
```

And you are good to go :)

For testing purposes, I created a [demo page](https://error-snap-test.netlify.app/), where you can just put your project ID and test your errors.
