/* eslint-disable @typescript-eslint/no-explicit-any */


type YMapsType = {
  ready: (callback: () => void) => void;
  Map: new (container: string | HTMLElement, state?: object, options?: object) => any;
  Placemark: new (geometry: any, properties?: object, options?: object) => any;
  // Add other properties/methods you use if needed
};

declare global {
  interface Window {
    ymaps: YMapsType;
  }
}

export {};