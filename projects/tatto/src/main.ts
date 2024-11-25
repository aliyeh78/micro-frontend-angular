// Set the public path
declare let __webpack_public_path__: string;
__webpack_public_path__ = (window as any).__MF_PUBLIC_PATH__ || "/";
console.log(__webpack_public_path__)

// Import the bootstrap file after setting the public path
import('./bootstrap')
  .catch(err => console.error(err));
