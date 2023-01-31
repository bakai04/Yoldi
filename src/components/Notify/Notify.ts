import { toast } from "react-toastify";

interface IArguments {
  type: string,
  text: string
}

export const notify = ({ type, text }:IArguments) => {
  console.log(text)
  switch (type) {
    case "success":
      toast.success(text, {
        position: toast.POSITION.TOP_RIGHT,
      });
      break;

    case "error":
      toast.error(text, {
        position: toast.POSITION.TOP_RIGHT,
      });
      break;

    default:
      break;
  }
};
