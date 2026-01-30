declare module "*.css" {
  const content: any;
  export default content;
}

declare module "*.svg" {
  const content: any;
  export default content;
}

// Para los paquetes internos del repo
declare module "@repo/*";