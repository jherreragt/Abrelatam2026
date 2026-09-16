/// <reference types="vite/client" />

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'pretalx-schedule': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
