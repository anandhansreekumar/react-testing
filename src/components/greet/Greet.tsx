type Props = {
  name?: string;
};

const Greet: React.FC<Props> = ({ name = "" }) => {
  return <div>Hello {name}</div>;
};

export default Greet;
