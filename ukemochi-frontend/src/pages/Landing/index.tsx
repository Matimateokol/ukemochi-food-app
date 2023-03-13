import cogoToast from "cogo-toast";
import { FormEvent, useContext, useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AUTH_TYPE, IPAYLOAD } from "../../@types";
import recipeOne from "../../assets/recipe-one.jpg";
import { Input, Form, Button } from "../../components";
import { AuthenticationContext } from "../../context";
import { validateEmail } from "../../utils";

export const Landing = () => {
  const navigate = useNavigate();
  // protecting this route
  // can be done in a higher order component
  useLayoutEffect(() => {
    if (
    !!sessionStorage.getItem("token") &&
    !!sessionStorage.getItem("email")
    ) {
    navigate("/dashboard");
    }
  }, []);

  const { loading, onLogin } = useContext(AuthenticationContext) as AUTH_TYPE;
  const [state, setState] = useState<IPAYLOAD>({ email: "", password: "" });
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateEmail(state?.email)) {
      return cogoToast.error("Invalid email");
    }
    if (!state?.password || state?.password?.length < 7) {
      return cogoToast.error("Please provide password");
    }
    await onLogin(state);
  };

  const handleState = (e: FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setState({ ...state, [name]: value });
  };
  return (
    <div className="container bg-zinc-100 text-white h-[100%] flex flex-col-reverse md:flex-row w-full">
      <div className="w-full h-full">
        <Form
          className="flex items-center justify-center w-full h-full p-10"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-2 w-full md:w-[50%]">
            <h2 className="text-orange-400 font-extrabold text-xl underline underline-offset-4 ">
              Ukemochi - food app
            </h2>
            <Input
              name="email"
              placeholder="Email"
              handleChange={handleState}
              type="text"
              className={`bg-zinc-700 py-1 px-4 w-full shadow-x1 placeholder:text-sm hover:bg-zinc-600 cursor-pointer focus:outline-orange-500`}
              disabled={loading}
            />

            <Input
              name="password"
              placeholder="Password"
              handleChange={handleState}
              type="password"
              className={`bg-zinc-700 py-1 px-4 w-full placeholder:text-sm hover:bg-zinc-600 cursor-pointer focus:outline-orange-500`}
              disabled={loading}
            />
            <div className="w-full md:w-[50%] m-auto flex flex-col gap-2">
              <Button
                title={loading ? "Loading" : "Login"}
                className={`bg-orange-400 text-white hover:bg-orange-500 py-1 px-6 w-full `}
                type="submit"
                disabled={loading}
              />
            </div>
          </div>
        </Form>
      </div>
      <div className="w-full h-full saturate-150">
        <img
          src={recipeOne}
          alt="A dish with food recipes"
          className="w-full h-full object-center object-cover"
        />
      </div>
    </div>
  );
};
