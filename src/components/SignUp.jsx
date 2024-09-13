import React, { useContext, useRef } from "react";
import { AuthContext } from "../context/AuthContext";

const SignUp = () => {
  const { signup, error, setError } = useContext(AuthContext);
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const handleSignUp = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    if (email === "" && password === "") {
      setError("Email and passwords are required");
    } else if (email === "") {
      setError("Email are required");
    } else if (password === "") {
      setError("Password are required");
    } else {
      if (password.length < 8) {
        setError("Password should be minimum of 8 characters");
      } else if(password !== confirmPassword){
        setError("Both passwords should match.")
      }else{
        signup(email, password);
        setError("");
      }
    }
  };

  return (
    <div className="relative bg-black h-full">
      <img
        className="min-h-screen"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/04bef84d-51f6-401e-9b8e-4a521cbce3c5/null/IN-en-20240903-TRIFECTA-perspective_0d3aac9c-578f-4e3c-8aa8-bbf4a392269b_small.jpg"
        srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/04bef84d-51f6-401e-9b8e-4a521cbce3c5/null/IN-en-20240903-TRIFECTA-perspective_0d3aac9c-578f-4e3c-8aa8-bbf4a392269b_small.jpg 1000w,
        https://assets.nflxext.com/ffe/siteui/vlv3/04bef84d-51f6-401e-9b8e-4a521cbce3c5/null/IN-en-20240903-TRIFECTA-perspective_0d3aac9c-578f-4e3c-8aa8-bbf4a392269b_medium.jpg 1500w,
        https://assets.nflxext.com/ffe/siteui/vlv3/04bef84d-51f6-401e-9b8e-4a521cbce3c5/null/IN-en-20240903-TRIFECTA-perspective_0d3aac9c-578f-4e3c-8aa8-bbf4a392269b_large.jpg 1800w"
        alt="backround_image"
      ></img>

      <div className="absolute w-full top-0 h-full bg-[#00000092]">
        <div className="mx-auto w-[1200px] opacity-100 py-5">
          <svg
            viewBox="0 0 111 30"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            width="150px"
            fill="#e50914"
            opacity="1"
          >
            <g>
              <path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"></path>
            </g>
          </svg>
        </div>

        <div className="signin max-w-[450px] mx-auto bg-[#000000a5] mb-20">
          <form className="flex flex-col p-12" onSubmit={handleSignUp}>
            <h2 className="font-bold text-4xl mb-6">Sign Up</h2>
            <div className=" flex flex-col items-center gap-5">
              {error && <p className="text-red-500">{error}</p>}
              <input
                type="email"
                ref={emailRef}
                autoComplete="email"
                placeholder="Email or mobile number"
                className="w-full p-4 bg-[#000000c5] border rounded border-gray-500"
                />
              <input
                type="password"
                aria-label="Password"
                autoComplete="new-password"
                ref={passwordRef}
                placeholder="Password"
                className="w-full p-4 bg-[#000000c5] border rounded border-gray-500"
              />
              <input
                type="password"
                autoComplete="new-password"
                aria-label="CPassword"
                ref={confirmPasswordRef}
                placeholder="Confirm Password"
                className="w-full p-4 bg-[#000000c5] border rounded border-gray-500"
              />
              <button type="submit" className="w-full bg-[#e50914] p-2 rounded">
                Sign Up
              </button>
            </div>
            <div>
              <div className="flex flex-col gap-8 mb-8">
                <div className="flex items-center mt-5">
                  <input
                    className="size-5 me-3 "
                    type="checkbox"
                    name=""
                    id=""
                  />
                  <label htmlFor="">Remember me</label>
                </div>
                <div>
                  <span className="text-gray-500 ">
                    Already have an account?{" "}
                  </span>
                  <a href="/login" className="hover:underline">
                    <span>Sign in now.</span>
                  </a>
                </div>
                <div>
                  <span className="text-gray-500 text-sm">
                    This page is protected by Google reCAPTCHA to ensure you're
                    not a bot.
                  </span>
                  <span className="text-blue-700 text-sm"> Learn more.</span>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
