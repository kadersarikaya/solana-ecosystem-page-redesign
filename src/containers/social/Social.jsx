import React from 'react'
import './social.scss'
import Twitter from "../../assets/logo/Twitter.svg"
import Telegram from "../../assets/logo/Telegram.svg"
import Discord from "../../assets/logo/Discord.svg"
import github from "../../assets/logo/github.svg"
import reddit from "../../assets/logo/reddit.svg"
import youtube from "../../assets/logo/youtube.svg"

const Social = () => {
  return (
    <div className='sol__social main-padding' >
      <div className="sol__social-community">
        <h1>Meet the worldwide community!</h1>
        <p>Join a fast-growing community of developers 
          and innovators connected all over the world, 
          building the new era of the internet.
        </p>
      </div> 
      <div className="sol__social-media">
        <div className="sol__social-media--part1">
          <div className="sol__social-media--item">
            <a href="">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M28 5.32876C26.9699 5.78562 25.8626 6.09426 24.7007 6.2331C25.8867 5.52234 26.7977 4.39685 27.2265 3.05565C26.1165 3.71393 24.8871 4.19178 23.5785 4.44933C22.5307 3.33307 21.0378 2.63574 19.3855 2.63574C16.2131 2.63574 13.6409 5.20712 13.6409 8.37884C13.6409 8.82898 13.6917 9.26735 13.7897 9.6877C9.01539 9.44821 4.78265 7.16166 1.94932 3.68691C1.45484 4.53513 1.17148 5.52164 1.17148 6.57421C1.17148 8.56683 2.18564 10.3247 3.72704 11.3546C2.7854 11.3248 1.89962 11.0664 1.12514 10.6363C1.12448 10.6602 1.12448 10.6843 1.12448 10.7085C1.12448 13.4911 3.10465 15.8123 5.73259 16.3402C5.25057 16.4715 4.74307 16.5416 4.21919 16.5416C3.84903 16.5416 3.48923 16.5055 3.13839 16.4386C3.86947 18.7202 5.99089 20.3807 8.50474 20.4269C6.53871 21.9674 4.06183 22.8856 1.37032 22.8856C0.90664 22.8856 0.449402 22.8583 0 22.8053C2.54227 24.435 5.56179 25.3857 8.80591 25.3857C19.3722 25.3857 25.1503 16.6344 25.1503 9.04466C25.1503 8.79564 25.1447 8.54807 25.1337 8.30158C26.2559 7.49199 27.2297 6.48057 27.9999 5.32876H28Z" fill="#7A7A7A"/>
              <path d="M28 5.32876C26.9699 5.78562 25.8626 6.09426 24.7007 6.2331C25.8867 5.52234 26.7977 4.39685 27.2265 3.05565C26.1165 3.71393 24.8871 4.19178 23.5785 4.44933C22.5307 3.33307 21.0378 2.63574 19.3855 2.63574C16.2131 2.63574 13.6409 5.20712 13.6409 8.37884C13.6409 8.82898 13.6917 9.26735 13.7897 9.6877C9.01539 9.44821 4.78265 7.16166 1.94932 3.68691C1.45484 4.53513 1.17148 5.52164 1.17148 6.57421C1.17148 8.56683 2.18564 10.3247 3.72704 11.3546C2.7854 11.3248 1.89962 11.0664 1.12514 10.6363C1.12448 10.6602 1.12448 10.6843 1.12448 10.7085C1.12448 13.4911 3.10465 15.8123 5.73259 16.3402C5.25057 16.4715 4.74307 16.5416 4.21919 16.5416C3.84903 16.5416 3.48923 16.5055 3.13839 16.4386C3.86947 18.7202 5.99089 20.3807 8.50474 20.4269C6.53871 21.9674 4.06183 22.8856 1.37032 22.8856C0.90664 22.8856 0.449402 22.8583 0 22.8053C2.54227 24.435 5.56179 25.3857 8.80591 25.3857C19.3722 25.3857 25.1503 16.6344 25.1503 9.04466C25.1503 8.79564 25.1447 8.54807 25.1337 8.30158C26.2559 7.49199 27.2297 6.48057 27.9999 5.32876H28Z" fill="#9945FF" fill-opacity="0.04"/>
            </svg>
            <p>Twitter</p>
            </a>
          </div>
          <div className="sol__social-media--item"> 
          <a href="">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M20.1499 22.9694C20.4854 23.1996 20.9177 23.2571 21.303 23.1157C21.6885 22.9734 21.9718 22.6544 22.0572 22.2677C22.9624 18.1444 25.1582 7.70796 25.9821 3.95727C26.0446 3.67458 25.9404 3.38078 25.7113 3.19197C25.4822 3.00318 25.1644 2.94866 24.8811 3.05063C20.5135 4.61756 7.06277 9.50914 1.56498 11.4809C1.21603 11.6061 0.988956 11.9312 1.00041 12.2876C1.01291 12.645 1.26083 12.955 1.61811 13.059C4.08368 13.7738 7.32005 14.7682 7.32005 14.7682C7.32005 14.7682 8.83255 19.1954 9.62105 21.4468C9.72003 21.7296 9.94815 21.9517 10.2492 22.0284C10.5491 22.1041 10.87 22.0244 11.0939 21.8194C12.3606 20.6604 14.3188 18.8683 14.3188 18.8683C14.3188 18.8683 18.0396 21.5125 20.1499 22.9694ZM8.68148 14.2089L10.4304 19.8002L10.8189 16.2595C10.8189 16.2595 17.5761 10.3521 21.428 6.98511C21.5405 6.88617 21.5562 6.72059 21.4624 6.60448C21.3698 6.48838 21.1989 6.46112 21.0708 6.53987C16.6063 9.30318 8.68148 14.2089 8.68148 14.2089Z" fill="#7A7A7A"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M20.1499 22.9694C20.4854 23.1996 20.9177 23.2571 21.303 23.1157C21.6885 22.9734 21.9718 22.6544 22.0572 22.2677C22.9624 18.1444 25.1582 7.70796 25.9821 3.95727C26.0446 3.67458 25.9404 3.38078 25.7113 3.19197C25.4822 3.00318 25.1644 2.94866 24.8811 3.05063C20.5135 4.61756 7.06277 9.50914 1.56498 11.4809C1.21603 11.6061 0.988956 11.9312 1.00041 12.2876C1.01291 12.645 1.26083 12.955 1.61811 13.059C4.08368 13.7738 7.32005 14.7682 7.32005 14.7682C7.32005 14.7682 8.83255 19.1954 9.62105 21.4468C9.72003 21.7296 9.94815 21.9517 10.2492 22.0284C10.5491 22.1041 10.87 22.0244 11.0939 21.8194C12.3606 20.6604 14.3188 18.8683 14.3188 18.8683C14.3188 18.8683 18.0396 21.5125 20.1499 22.9694ZM8.68148 14.2089L10.4304 19.8002L10.8189 16.2595C10.8189 16.2595 17.5761 10.3521 21.428 6.98511C21.5405 6.88617 21.5562 6.72059 21.4624 6.60448C21.3698 6.48838 21.1989 6.46112 21.0708 6.53987C16.6063 9.30318 8.68148 14.2089 8.68148 14.2089Z" fill="#9945FF" fill-opacity="0.04"/>
            </svg>
              <p>Telegram</p>
            </a>
          </div>
          <div className="sol__social-media--item"> 
          <a href="">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_1147_2023)">
              <path d="M23.6921 5.27349C21.9187 4.44678 19.9986 3.84675 17.9985 3.50006C17.9809 3.4995 17.9635 3.50279 17.9474 3.5097C17.9312 3.51661 17.9168 3.52698 17.9051 3.54006C17.6651 3.98009 17.3851 4.55345 17.1984 4.99347C15.077 4.67345 12.9196 4.67345 10.7981 4.99347C10.6114 4.54011 10.3314 3.98009 10.0781 3.54006C10.0647 3.5134 10.0247 3.50006 9.98473 3.50006C7.98463 3.84675 6.07786 4.44678 4.29111 5.27349C4.27777 5.27349 4.26444 5.28682 4.2511 5.30015C0.624251 10.7271 -0.375801 16.0074 0.117558 21.2343C0.117558 21.261 0.130892 21.2876 0.15756 21.301C2.55768 23.0611 4.86447 24.1278 7.14459 24.8345C7.18459 24.8478 7.22459 24.8345 7.23792 24.8078C7.77129 24.0745 8.25131 23.3011 8.66466 22.4877C8.69133 22.4344 8.66466 22.381 8.61133 22.3677C7.85129 22.0743 7.13125 21.7277 6.42455 21.3276C6.37121 21.301 6.37121 21.221 6.41122 21.181C6.55789 21.0743 6.70456 20.9543 6.85124 20.8476C6.87791 20.821 6.91791 20.821 6.94458 20.8343C11.5315 22.9277 16.4784 22.9277 21.012 20.8343C21.0386 20.821 21.0786 20.821 21.1053 20.8476C21.252 20.9676 21.3987 21.0743 21.5453 21.1943C21.5987 21.2343 21.5987 21.3143 21.532 21.341C20.8386 21.7543 20.1053 22.0877 19.3452 22.381C19.2919 22.3944 19.2785 22.461 19.2919 22.501C19.7186 23.3144 20.1986 24.0878 20.7186 24.8212C20.7586 24.8345 20.7986 24.8478 20.8386 24.8345C23.1321 24.1278 25.4389 23.0611 27.839 21.301C27.8656 21.2876 27.879 21.261 27.879 21.2343C28.4657 15.194 26.9056 9.95373 23.7454 5.30015C23.7321 5.28682 23.7188 5.27349 23.6921 5.27349V5.27349ZM9.35803 18.0475C7.98463 18.0475 6.8379 16.7807 6.8379 15.2207C6.8379 13.6606 7.95796 12.3939 9.35803 12.3939C10.7714 12.3939 11.8915 13.6739 11.8782 15.2207C11.8782 16.7807 10.7581 18.0475 9.35803 18.0475ZM18.6518 18.0475C17.2784 18.0475 16.1317 16.7807 16.1317 15.2207C16.1317 13.6606 17.2518 12.3939 18.6518 12.3939C20.0653 12.3939 21.1853 13.6739 21.172 15.2207C21.172 16.7807 20.0653 18.0475 18.6518 18.0475Z" fill="#7A7A7A"/>
              <path d="M23.6921 5.27349C21.9187 4.44678 19.9986 3.84675 17.9985 3.50006C17.9809 3.4995 17.9635 3.50279 17.9474 3.5097C17.9312 3.51661 17.9168 3.52698 17.9051 3.54006C17.6651 3.98009 17.3851 4.55345 17.1984 4.99347C15.077 4.67345 12.9196 4.67345 10.7981 4.99347C10.6114 4.54011 10.3314 3.98009 10.0781 3.54006C10.0647 3.5134 10.0247 3.50006 9.98473 3.50006C7.98463 3.84675 6.07786 4.44678 4.29111 5.27349C4.27777 5.27349 4.26444 5.28682 4.2511 5.30015C0.624251 10.7271 -0.375801 16.0074 0.117558 21.2343C0.117558 21.261 0.130892 21.2876 0.15756 21.301C2.55768 23.0611 4.86447 24.1278 7.14459 24.8345C7.18459 24.8478 7.22459 24.8345 7.23792 24.8078C7.77129 24.0745 8.25131 23.3011 8.66466 22.4877C8.69133 22.4344 8.66466 22.381 8.61133 22.3677C7.85129 22.0743 7.13125 21.7277 6.42455 21.3276C6.37121 21.301 6.37121 21.221 6.41122 21.181C6.55789 21.0743 6.70456 20.9543 6.85124 20.8476C6.87791 20.821 6.91791 20.821 6.94458 20.8343C11.5315 22.9277 16.4784 22.9277 21.012 20.8343C21.0386 20.821 21.0786 20.821 21.1053 20.8476C21.252 20.9676 21.3987 21.0743 21.5453 21.1943C21.5987 21.2343 21.5987 21.3143 21.532 21.341C20.8386 21.7543 20.1053 22.0877 19.3452 22.381C19.2919 22.3944 19.2785 22.461 19.2919 22.501C19.7186 23.3144 20.1986 24.0878 20.7186 24.8212C20.7586 24.8345 20.7986 24.8478 20.8386 24.8345C23.1321 24.1278 25.4389 23.0611 27.839 21.301C27.8656 21.2876 27.879 21.261 27.879 21.2343C28.4657 15.194 26.9056 9.95373 23.7454 5.30015C23.7321 5.28682 23.7188 5.27349 23.6921 5.27349V5.27349ZM9.35803 18.0475C7.98463 18.0475 6.8379 16.7807 6.8379 15.2207C6.8379 13.6606 7.95796 12.3939 9.35803 12.3939C10.7714 12.3939 11.8915 13.6739 11.8782 15.2207C11.8782 16.7807 10.7581 18.0475 9.35803 18.0475ZM18.6518 18.0475C17.2784 18.0475 16.1317 16.7807 16.1317 15.2207C16.1317 13.6606 17.2518 12.3939 18.6518 12.3939C20.0653 12.3939 21.1853 13.6739 21.172 15.2207C21.172 16.7807 20.0653 18.0475 18.6518 18.0475Z" fill="#9945FF" fill-opacity="0.04"/>
              </g>
              <defs>
              <clipPath id="clip0_1147_2023">
              <rect width="28" height="28" fill="#7A7A7A"/>
              </clipPath>
              </defs>
            </svg>
            <p>Discord</p>
            </a>
          </div> 
        </div>
        <div className="sol__social-media--part2">
          <div className="sol__social-media--item">
            <a href="">
            <img src={github} alt="" />
            <p>Github</p>
            </a>
          </div>
          <div className="sol__social-media--item">
            <a href="">
            <img src={reddit} alt="" />
            <p>Reddit</p>
            </a>
          </div>
          <div className="sol__social-media--item">
            <a href="">
            <img src={youtube} alt="" />
            <p>Youtube</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Social