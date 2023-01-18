# Widevine for Gluon

## Use Widevine easily with a custom `open()` wrapper
Use a wrapper around `Gluon.open()` to easily setup Widevine and open a Gluon window.

```js
import { openWithWidevine } from '@gluon-framework/widevine';

const Window = await openWithWidevine('https://gluonjs.org', { /* options */ });
```

## Explicitly install Widevine
Install Widevine yourself.

```js
import { ensureWidevine } from '@gluon-framework/widevine';

await ensureWidevine();
```