import React from "react";
import Rows from "./Rows";
import "./MainView.css";

function MainView() {
  return (
    <>
      <div className="relative">
        <div className="image-container absolute -z-40">
          <img
            className="w-screen"
            src="src/assets/images/image.png"
            alt="poster_image"
          />
          <div className="billboard-vintage absolute bottom-0"></div>
        </div>
        <div className="bottom-container ">
          <div className="billboard ">
            <div className="billboard-movie-title flex justify-end flex-col top-0 w-[36%] left-[4%] pt-64">
              <img src="src/assets/images/billboard-title-image.png" alt="" />
              <div className="supplemental-message">
                Watch in Hindi, Tamil, Telugu, Malayalam, Kannada
              </div>
              <div className="short-description">
                This action-packed thriller from director Ali Abbas Zafar
                (“Tiger Zinda Hai”) follows two soldiers assigned to take down a
                mysterious villain.{" "}
              </div>
              <div className="billboard-buttons flex gap-2">
                <button className="billboard-btn bg-white text-black flex gap-3">
                  <div className="">
                    <div className="medium ltr-iyulz3" role="presentation">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        role="img"
                        data-icon="PlayStandard"
                        aria-hidden="true"
                      >
                        <path
                          d="M5 2.69127C5 1.93067 5.81547 1.44851 6.48192 1.81506L23.4069 11.1238C24.0977 11.5037 24.0977 12.4963 23.4069 12.8762L6.48192 22.1849C5.81546 22.5515 5 22.0693 5 21.3087V2.69127Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <span>Play</span>
                </button>
                <button className="billboard-btn bg-[#45454581] flex gap-3">
                  <div className="medium ltr-iyulz3" role="presentation">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      role="img"
                      data-icon="CircleIStandard"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <span>More Info</span>
                </button>
              </div>
            </div>
          </div>
          <Rows />
        </div>
      </div>
    </>
  );
}

export default MainView;
