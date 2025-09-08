declare global {
  interface Window {
    fbq: (action: string, eventName: string, parameters?: any, options?: { eventID?: string }) => void;
  }
}

export {};
