/* eslint-disable @typescript-eslint/no-explicit-any */
interface Window {
  reportEntryFunction: (params: any) => void;
  reportUseState: (params: any) => void;
}