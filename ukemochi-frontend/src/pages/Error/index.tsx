import { useRouteError, useNavigate } from "react-router-dom";
import { Button } from "../../components";

export const ErrorPage = () => {
  const navigate = useNavigate();
  const error: any = useRouteError();
  console.error(error);
  const handleNavigate = () => {
    navigate("/");
  };
  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center flex-col bg-stone-200">
      <h1 className="text-lg font-extrabold text-orange-400">Oops!</h1>
      <p className="text-zinc-700">Sorry, an unexpected error has occurred.</p>
      {/* <p className="text-orange-500 text-lg ">
        <i className="underline">{error.statusText || error.message}</i>
      </p> */}
      <Button
        title="Click to reload"
        handleClick={handleNavigate}
        className={`bg-orange-400 text-white hover:bg-orange-500 
          py-1 px-2 w-[50%]
          `}
      />
    </div>
  );
};