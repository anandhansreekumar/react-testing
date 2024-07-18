import { Props } from "./greet.types";

const Greet: React.FC<Props> = ({ name = "Guest" }) => {
  return <div>Hello {name}</div>;
};

export default Greet;
