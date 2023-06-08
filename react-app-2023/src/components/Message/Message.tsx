interface Props {
  message?: string;
}
function Message({ message = "Hello World!" }: Props) {
  return <h1>{message}</h1>;
}

export default Message;
