declare module "*.css" {
  const styles: { [className: string]: string };
  export default styles;
}

declare module "*.css?inline" {
  const css: string;
  export default css;
}

declare module "*.css?url" {
  const url: string;
  export default url;
}
