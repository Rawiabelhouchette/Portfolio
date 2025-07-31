export default function Pre(props: any) {
  return <div id={props.load ? "preloader" : "preloader-none"}></div>;
};