type YMapsType = {
  ready: (callback: () => void) => void;
  Map: any;
  Placemark: any;
  // Add other properties/methods you use if needed
};

declare global {
  interface Window {
    ymaps: YMapsType;
  }
}

export {};