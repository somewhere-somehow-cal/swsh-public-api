# swsh Node.js SDK

This is an auto-generated SDK created using [Fern](https://docs.buildwithfern.com/overview/welcome/introduction). Documentation for usage can be found [here](https://docs.joinswsh.com)

This SDK is intended to be used in a backend, ESM, Node.js environment. It is not recommended to use this SDK in a frontend environment, as it exposes your API key.

## Usage

```typescript
import { SwshApiClient } from "@somewhere-somehow/swsh-public-api";

const client = new SwshApiClient({
	apiKey: "<YOUR_API_KEY>",
});

const { data } = await client.ping();
```
