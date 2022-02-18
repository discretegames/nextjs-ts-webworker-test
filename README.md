# [nextjs-ts-webworker-test](https://github.com/discretegames/nextjs-ts-webworker-test) ([demo site](https://nextjs-ts-webworker-test.vercel.app/))

This is a test project for getting web workers (and module web workers) written in TypeScript working in NextJS.
It tests workers that are built into the NextJS project, and ones imported from
[an NPM package](https://www.npmjs.com/package/@discretegames/nextjs-ts-webworker-package).

Head to <https://nextjs-ts-webworker-test.vercel.app> to see the result in production.  
Clone the repo, run `npm run dev`, and open <http://localhost:3000> to see the result locally.

This [Next.js](https://nextjs.org/) project was bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Made with NextJS 12.0.10 and React 17.0.2.

<!-- markdownlint-disable MD030 -->

## Notes

All the web workers here work well, but there's still points I'm confused about:

-   Why do I need a
    [dynamic import](https://github.com/discretegames/nextjs-ts-webworker-test/blob/main/components/PackageAPI.tsx#L16)
    for the package worker to avoid the `Unexpected token 'export'` errors? Why can't it just be
    `import { PackageWorkerAPI } from "@discretegames/nextjs-ts-webworker-package";` at the top?

-   Why do module workers work in Firefox/Firefox for Android when "Support for ECMAScript modules" is not supposed
    to be supported in them? (See <https://developer.mozilla.org/en-US/docs/Web/API/Worker>.)

-   Related to above, why is `{ type: "module" }` not required for module workers, and/or does supplying it have any
    effect in NextJS? It seems there is some Webpack/NextJS magic that makes module workers not actually modules.
    But then where in the docs does it describe that?

-   Is `addEventListener("message", caller);` any different or preferable to `onmessage = caller;`?

## Resources

-   <https://github.com/vercel/next.js/tree/canary/examples/with-web-worker>
-   <https://file-translate.com/en/blog/nextjs-with-web-worker> (outdated but still useful)
-   <https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers>
-   <https://developer.mozilla.org/en-US/docs/Web/API/Worker/message_event>
