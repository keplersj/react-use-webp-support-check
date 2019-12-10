# react-use-webp-support-check

React Hook to determine if WebP is supported in the current environment

## Installation

```bash
npm install react-use-webp-support-check
```

## Usage

```js
import React from "react";
import { useWebPSupportCheck } from "react-use-webp-support-check";

export default () => {
  const supportsWebP = useWebPSupportCheck();

  return (
    <div>
      {supportsWebP ? (
        <span>WebP is supported!</span>
      ) : (
        <span>WebP is not supported</span>
      )}
    </div>
  );
};
```

## License

Copyright 2019 [Kepler Sticka-Jones](https://keplersj.com/). Licensed MIT.
