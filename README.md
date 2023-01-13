# Widevine for Gluon

## Ask for widevine with your `open()`

```js
import {openWithWv} from "@gluon-framework/widevine";

const Window = await openWithWv("url", {});
```

## Explicitly install widevine

```js
import {ensureWidevine} from "@gluon-framework/widevine";

await ensureWidevine();
```