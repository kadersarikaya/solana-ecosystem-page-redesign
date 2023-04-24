import React from 'react'
import './footer.scss'
import solanaLogo from '../../assets/logo/solanaLogo.svg'

const Footer = () => {
  return (
    <div className='sol__footer main-padding' >
      <div className="sol__footer-container">
        <div className="sol__footer-social">
            <img src={solanaLogo} alt="" />
            <p>Managed by Solana Foundation</p>
            <ul>
              <li>
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
                </a>
              </li>
              <li>
                <a href="">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.1499 22.9694C20.4854 23.1996 20.9177 23.2571 21.303 23.1157C21.6885 22.9734 21.9718 22.6544 22.0572 22.2677C22.9624 18.1444 25.1582 7.70796 25.9821 3.95727C26.0446 3.67458 25.9404 3.38078 25.7113 3.19197C25.4822 3.00318 25.1644 2.94866 24.8811 3.05063C20.5135 4.61756 7.06277 9.50914 1.56498 11.4809C1.21603 11.6061 0.988956 11.9312 1.00041 12.2876C1.01291 12.645 1.26083 12.955 1.61811 13.059C4.08368 13.7738 7.32005 14.7682 7.32005 14.7682C7.32005 14.7682 8.83255 19.1954 9.62105 21.4468C9.72003 21.7296 9.94815 21.9517 10.2492 22.0284C10.5491 22.1041 10.87 22.0244 11.0939 21.8194C12.3606 20.6604 14.3188 18.8683 14.3188 18.8683C14.3188 18.8683 18.0396 21.5125 20.1499 22.9694ZM8.68148 14.2089L10.4304 19.8002L10.8189 16.2595C10.8189 16.2595 17.5761 10.3521 21.428 6.98511C21.5405 6.88617 21.5562 6.72059 21.4624 6.60448C21.3698 6.48838 21.1989 6.46112 21.0708 6.53987C16.6063 9.30318 8.68148 14.2089 8.68148 14.2089Z" fill="#7A7A7A"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.1499 22.9694C20.4854 23.1996 20.9177 23.2571 21.303 23.1157C21.6885 22.9734 21.9718 22.6544 22.0572 22.2677C22.9624 18.1444 25.1582 7.70796 25.9821 3.95727C26.0446 3.67458 25.9404 3.38078 25.7113 3.19197C25.4822 3.00318 25.1644 2.94866 24.8811 3.05063C20.5135 4.61756 7.06277 9.50914 1.56498 11.4809C1.21603 11.6061 0.988956 11.9312 1.00041 12.2876C1.01291 12.645 1.26083 12.955 1.61811 13.059C4.08368 13.7738 7.32005 14.7682 7.32005 14.7682C7.32005 14.7682 8.83255 19.1954 9.62105 21.4468C9.72003 21.7296 9.94815 21.9517 10.2492 22.0284C10.5491 22.1041 10.87 22.0244 11.0939 21.8194C12.3606 20.6604 14.3188 18.8683 14.3188 18.8683C14.3188 18.8683 18.0396 21.5125 20.1499 22.9694ZM8.68148 14.2089L10.4304 19.8002L10.8189 16.2595C10.8189 16.2595 17.5761 10.3521 21.428 6.98511C21.5405 6.88617 21.5562 6.72059 21.4624 6.60448C21.3698 6.48838 21.1989 6.46112 21.0708 6.53987C16.6063 9.30318 8.68148 14.2089 8.68148 14.2089Z" fill="#9945FF" fill-opacity="0.04"/>
                  </svg>
                </a>
              </li>
              <li>
                <a href="">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M28 5.32876C26.9699 5.78562 25.8626 6.09426 24.7007 6.2331C25.8867 5.52234 26.7977 4.39685 27.2265 3.05565C26.1165 3.71393 24.8871 4.19178 23.5785 4.44933C22.5307 3.33307 21.0378 2.63574 19.3855 2.63574C16.2131 2.63574 13.6409 5.20712 13.6409 8.37884C13.6409 8.82898 13.6917 9.26735 13.7897 9.6877C9.01539 9.44821 4.78265 7.16166 1.94932 3.68691C1.45484 4.53513 1.17148 5.52164 1.17148 6.57421C1.17148 8.56683 2.18564 10.3247 3.72704 11.3546C2.7854 11.3248 1.89962 11.0664 1.12514 10.6363C1.12448 10.6602 1.12448 10.6843 1.12448 10.7085C1.12448 13.4911 3.10465 15.8123 5.73259 16.3402C5.25057 16.4715 4.74307 16.5416 4.21919 16.5416C3.84903 16.5416 3.48923 16.5055 3.13839 16.4386C3.86947 18.7202 5.99089 20.3807 8.50474 20.4269C6.53871 21.9674 4.06183 22.8856 1.37032 22.8856C0.90664 22.8856 0.449402 22.8583 0 22.8053C2.54227 24.435 5.56179 25.3857 8.80591 25.3857C19.3722 25.3857 25.1503 16.6344 25.1503 9.04466C25.1503 8.79564 25.1447 8.54807 25.1337 8.30158C26.2559 7.49199 27.2297 6.48057 27.9999 5.32876H28Z" fill="#7A7A7A"/>
                  <path d="M28 5.32876C26.9699 5.78562 25.8626 6.09426 24.7007 6.2331C25.8867 5.52234 26.7977 4.39685 27.2265 3.05565C26.1165 3.71393 24.8871 4.19178 23.5785 4.44933C22.5307 3.33307 21.0378 2.63574 19.3855 2.63574C16.2131 2.63574 13.6409 5.20712 13.6409 8.37884C13.6409 8.82898 13.6917 9.26735 13.7897 9.6877C9.01539 9.44821 4.78265 7.16166 1.94932 3.68691C1.45484 4.53513 1.17148 5.52164 1.17148 6.57421C1.17148 8.56683 2.18564 10.3247 3.72704 11.3546C2.7854 11.3248 1.89962 11.0664 1.12514 10.6363C1.12448 10.6602 1.12448 10.6843 1.12448 10.7085C1.12448 13.4911 3.10465 15.8123 5.73259 16.3402C5.25057 16.4715 4.74307 16.5416 4.21919 16.5416C3.84903 16.5416 3.48923 16.5055 3.13839 16.4386C3.86947 18.7202 5.99089 20.3807 8.50474 20.4269C6.53871 21.9674 4.06183 22.8856 1.37032 22.8856C0.90664 22.8856 0.449402 22.8583 0 22.8053C2.54227 24.435 5.56179 25.3857 8.80591 25.3857C19.3722 25.3857 25.1503 16.6344 25.1503 9.04466C25.1503 8.79564 25.1447 8.54807 25.1337 8.30158C26.2559 7.49199 27.2297 6.48057 27.9999 5.32876H28Z" fill="#9945FF" fill-opacity="0.04"/>
                  </svg>
                </a>
              </li>
              <li>
                <a href="">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 1C12.2928 1 10.6023 1.3446 9.02512 2.01413C7.44788 2.68366 6.01477 3.66501 4.80761 4.90214C2.36964 7.40064 1 10.7893 1 14.3228C1 20.2114 4.731 25.2074 9.892 26.9794C10.542 27.0859 10.75 26.6729 10.75 26.3132V24.0617C7.149 24.861 6.382 22.2764 6.382 22.2764C5.784 20.731 4.939 20.318 4.939 20.318C3.756 19.492 5.03 19.5186 5.03 19.5186C6.33 19.6119 7.019 20.8909 7.019 20.8909C8.15 22.9159 10.061 22.3164 10.802 21.9967C10.919 21.1307 11.257 20.5445 11.621 20.2114C8.735 19.8783 5.706 18.7326 5.706 13.6566C5.706 12.1778 6.2 10.9921 7.045 10.0461C6.915 9.71308 6.46 8.32751 7.175 6.52894C7.175 6.52894 8.267 6.16923 10.75 7.88786C11.777 7.59476 12.895 7.44821 14 7.44821C15.105 7.44821 16.223 7.59476 17.25 7.88786C19.733 6.16923 20.825 6.52894 20.825 6.52894C21.54 8.32751 21.085 9.71308 20.955 10.0461C21.8 10.9921 22.294 12.1778 22.294 13.6566C22.294 18.7459 19.252 19.865 16.353 20.1981C16.821 20.6111 17.25 21.4238 17.25 22.6628V26.3132C17.25 26.6729 17.458 27.0993 18.121 26.9794C23.282 25.1941 27 20.2114 27 14.3228C27 12.5732 26.6637 10.8407 26.0104 9.22435C25.3571 7.60796 24.3995 6.13928 23.1924 4.90214C21.9852 3.66501 20.5521 2.68366 18.9749 2.01413C17.3977 1.3446 15.7072 1 14 1Z" fill="white"/>
                  <path d="M14 1C12.2928 1 10.6023 1.3446 9.02512 2.01413C7.44788 2.68366 6.01477 3.66501 4.80761 4.90214C2.36964 7.40064 1 10.7893 1 14.3228C1 20.2114 4.731 25.2074 9.892 26.9794C10.542 27.0859 10.75 26.6729 10.75 26.3132V24.0617C7.149 24.861 6.382 22.2764 6.382 22.2764C5.784 20.731 4.939 20.318 4.939 20.318C3.756 19.492 5.03 19.5186 5.03 19.5186C6.33 19.6119 7.019 20.8909 7.019 20.8909C8.15 22.9159 10.061 22.3164 10.802 21.9967C10.919 21.1307 11.257 20.5445 11.621 20.2114C8.735 19.8783 5.706 18.7326 5.706 13.6566C5.706 12.1778 6.2 10.9921 7.045 10.0461C6.915 9.71308 6.46 8.32751 7.175 6.52894C7.175 6.52894 8.267 6.16923 10.75 7.88786C11.777 7.59476 12.895 7.44821 14 7.44821C15.105 7.44821 16.223 7.59476 17.25 7.88786C19.733 6.16923 20.825 6.52894 20.825 6.52894C21.54 8.32751 21.085 9.71308 20.955 10.0461C21.8 10.9921 22.294 12.1778 22.294 13.6566C22.294 18.7459 19.252 19.865 16.353 20.1981C16.821 20.6111 17.25 21.4238 17.25 22.6628V26.3132C17.25 26.6729 17.458 27.0993 18.121 26.9794C23.282 25.1941 27 20.2114 27 14.3228C27 12.5732 26.6637 10.8407 26.0104 9.22435C25.3571 7.60796 24.3995 6.13928 23.1924 4.90214C21.9852 3.66501 20.5521 2.68366 18.9749 2.01413C17.3977 1.3446 15.7072 1 14 1Z" fill="#9945FF" fill-opacity="0.04"/>
                  </svg>
                </a>
              </li>
              <li>
                <a href="">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.6666 15.7197C12.6666 14.9597 12.04 14.333 11.28 14.333C10.52 14.333 9.89331 14.9597 9.89331 15.7197C9.89331 16.0874 10.0394 16.4401 10.2995 16.7002C10.5595 16.9602 10.9122 17.1063 11.28 17.1063C11.6477 17.1063 12.0004 16.9602 12.2605 16.7002C12.5205 16.4401 12.6666 16.0874 12.6666 15.7197ZM17.12 18.8797C16.52 19.4797 15.24 19.693 14.3333 19.693C13.4266 19.693 12.1466 19.4797 11.5466 18.8797C11.5142 18.845 11.475 18.8173 11.4314 18.7983C11.3878 18.7794 11.3408 18.7697 11.2933 18.7697C11.2458 18.7697 11.1988 18.7794 11.1552 18.7983C11.1116 18.8173 11.0724 18.845 11.04 18.8797C11.0053 18.9121 10.9776 18.9513 10.9586 18.9949C10.9397 19.0385 10.93 19.0855 10.93 19.133C10.93 19.1805 10.9397 19.2275 10.9586 19.2711C10.9776 19.3147 11.0053 19.3539 11.04 19.3863C11.9866 20.333 13.8 20.413 14.3333 20.413C14.8666 20.413 16.68 20.333 17.6266 19.3863C17.6614 19.3539 17.689 19.3147 17.708 19.2711C17.7269 19.2275 17.7367 19.1805 17.7367 19.133C17.7367 19.0855 17.7269 19.0385 17.708 18.9949C17.689 18.9513 17.6614 18.9121 17.6266 18.8797C17.4933 18.7463 17.2666 18.7463 17.12 18.8797ZM17.3866 14.333C16.6266 14.333 16 14.9597 16 15.7197C16 16.4797 16.6266 17.1063 17.3866 17.1063C18.1466 17.1063 18.7733 16.4797 18.7733 15.7197C18.7733 14.9597 18.16 14.333 17.3866 14.333Z" fill="white"/>
                  <path d="M12.6666 15.7197C12.6666 14.9597 12.04 14.333 11.28 14.333C10.52 14.333 9.89331 14.9597 9.89331 15.7197C9.89331 16.0874 10.0394 16.4401 10.2995 16.7002C10.5595 16.9602 10.9122 17.1063 11.28 17.1063C11.6477 17.1063 12.0004 16.9602 12.2605 16.7002C12.5205 16.4401 12.6666 16.0874 12.6666 15.7197ZM17.12 18.8797C16.52 19.4797 15.24 19.693 14.3333 19.693C13.4266 19.693 12.1466 19.4797 11.5466 18.8797C11.5142 18.845 11.475 18.8173 11.4314 18.7983C11.3878 18.7794 11.3408 18.7697 11.2933 18.7697C11.2458 18.7697 11.1988 18.7794 11.1552 18.7983C11.1116 18.8173 11.0724 18.845 11.04 18.8797C11.0053 18.9121 10.9776 18.9513 10.9586 18.9949C10.9397 19.0385 10.93 19.0855 10.93 19.133C10.93 19.1805 10.9397 19.2275 10.9586 19.2711C10.9776 19.3147 11.0053 19.3539 11.04 19.3863C11.9866 20.333 13.8 20.413 14.3333 20.413C14.8666 20.413 16.68 20.333 17.6266 19.3863C17.6614 19.3539 17.689 19.3147 17.708 19.2711C17.7269 19.2275 17.7367 19.1805 17.7367 19.133C17.7367 19.0855 17.7269 19.0385 17.708 18.9949C17.689 18.9513 17.6614 18.9121 17.6266 18.8797C17.4933 18.7463 17.2666 18.7463 17.12 18.8797ZM17.3866 14.333C16.6266 14.333 16 14.9597 16 15.7197C16 16.4797 16.6266 17.1063 17.3866 17.1063C18.1466 17.1063 18.7733 16.4797 18.7733 15.7197C18.7733 14.9597 18.16 14.333 17.3866 14.333Z" fill="#9945FF" fill-opacity="0.04"/>
                  <path d="M14.3333 1C6.97333 1 1 6.97333 1 14.3333C1 21.6933 6.97333 27.6667 14.3333 27.6667C21.6933 27.6667 27.6667 21.6933 27.6667 14.3333C27.6667 6.97333 21.6933 1 14.3333 1ZM22.0667 16.1067C22.0933 16.2933 22.1067 16.4933 22.1067 16.6933C22.1067 19.68 18.6267 22.1067 14.3333 22.1067C10.04 22.1067 6.56 19.68 6.56 16.6933C6.56 16.4933 6.57333 16.2933 6.6 16.1067C5.92 15.8 5.45333 15.12 5.45333 14.3333C5.45136 13.951 5.5624 13.5766 5.77252 13.2572C5.98264 12.9377 6.28247 12.6875 6.63434 12.5379C6.98621 12.3883 7.37444 12.3461 7.75026 12.4164C8.12607 12.4868 8.47272 12.6666 8.74667 12.9333C10.0933 11.96 11.96 11.3467 14.0267 11.28L15.0133 6.62667C15.0267 6.53333 15.08 6.45333 15.16 6.41333C15.24 6.36 15.3333 6.34667 15.4267 6.36L18.6533 7.05333C18.7628 6.83144 18.9296 6.64286 19.1365 6.50717C19.3433 6.37147 19.5828 6.2936 19.8299 6.28163C20.077 6.26966 20.3228 6.32402 20.5419 6.43908C20.7609 6.55414 20.9451 6.72571 21.0755 6.93598C21.2059 7.14626 21.2776 7.38759 21.2833 7.63493C21.2889 7.88228 21.2283 8.12664 21.1077 8.34266C20.9871 8.55868 20.8109 8.7385 20.5974 8.86346C20.3838 8.98843 20.1407 9.05398 19.8933 9.05333C19.1467 9.05333 18.5467 8.46667 18.5067 7.73333L15.6133 7.12L14.7333 11.28C16.7733 11.3467 18.6 11.9733 19.9333 12.9333C20.1377 12.7382 20.3823 12.59 20.65 12.4992C20.9176 12.4084 21.2018 12.3772 21.4828 12.4078C21.7638 12.4383 22.0347 12.5299 22.2765 12.676C22.5184 12.8222 22.7254 13.0195 22.8831 13.254C23.0408 13.4886 23.1453 13.7547 23.1894 14.0339C23.2335 14.3131 23.216 14.5985 23.1382 14.8702C23.0605 15.1419 22.9243 15.3934 22.7392 15.6069C22.5541 15.8205 22.3246 15.9911 22.0667 16.1067Z" fill="white"/>
                  <path d="M14.3333 1C6.97333 1 1 6.97333 1 14.3333C1 21.6933 6.97333 27.6667 14.3333 27.6667C21.6933 27.6667 27.6667 21.6933 27.6667 14.3333C27.6667 6.97333 21.6933 1 14.3333 1ZM22.0667 16.1067C22.0933 16.2933 22.1067 16.4933 22.1067 16.6933C22.1067 19.68 18.6267 22.1067 14.3333 22.1067C10.04 22.1067 6.56 19.68 6.56 16.6933C6.56 16.4933 6.57333 16.2933 6.6 16.1067C5.92 15.8 5.45333 15.12 5.45333 14.3333C5.45136 13.951 5.5624 13.5766 5.77252 13.2572C5.98264 12.9377 6.28247 12.6875 6.63434 12.5379C6.98621 12.3883 7.37444 12.3461 7.75026 12.4164C8.12607 12.4868 8.47272 12.6666 8.74667 12.9333C10.0933 11.96 11.96 11.3467 14.0267 11.28L15.0133 6.62667C15.0267 6.53333 15.08 6.45333 15.16 6.41333C15.24 6.36 15.3333 6.34667 15.4267 6.36L18.6533 7.05333C18.7628 6.83144 18.9296 6.64286 19.1365 6.50717C19.3433 6.37147 19.5828 6.2936 19.8299 6.28163C20.077 6.26966 20.3228 6.32402 20.5419 6.43908C20.7609 6.55414 20.9451 6.72571 21.0755 6.93598C21.2059 7.14626 21.2776 7.38759 21.2833 7.63493C21.2889 7.88228 21.2283 8.12664 21.1077 8.34266C20.9871 8.55868 20.8109 8.7385 20.5974 8.86346C20.3838 8.98843 20.1407 9.05398 19.8933 9.05333C19.1467 9.05333 18.5467 8.46667 18.5067 7.73333L15.6133 7.12L14.7333 11.28C16.7733 11.3467 18.6 11.9733 19.9333 12.9333C20.1377 12.7382 20.3823 12.59 20.65 12.4992C20.9176 12.4084 21.2018 12.3772 21.4828 12.4078C21.7638 12.4383 22.0347 12.5299 22.2765 12.676C22.5184 12.8222 22.7254 13.0195 22.8831 13.254C23.0408 13.4886 23.1453 13.7547 23.1894 14.0339C23.2335 14.3131 23.216 14.5985 23.1382 14.8702C23.0605 15.1419 22.9243 15.3934 22.7392 15.6069C22.5541 15.8205 22.3246 15.9911 22.0667 16.1067Z" fill="#9945FF" fill-opacity="0.04"/>
                  </svg>
                </a>
              </li>
              <li>
                <a href="">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M26.3384 8.02055C26.2317 7.64177 26.0229 7.29154 25.7297 6.99988C25.4366 6.70821 25.0679 6.4838 24.6554 6.34589C20.6857 4.98973 14.3482 5 14 5C13.6518 5 7.31429 4.98973 3.34464 6.34589C2.93206 6.4838 2.5634 6.70821 2.27027 6.99988C1.97715 7.29154 1.76829 7.64177 1.66161 8.02055C1.35982 9.03767 1 10.9075 1 14C1 17.0925 1.35982 18.9623 1.66161 19.9795C1.76829 20.3582 1.97715 20.7085 2.27027 21.0001C2.5634 21.2918 2.93206 21.5162 3.34464 21.6541C7.15179 22.9589 13.1179 23 13.9187 23H14.0812C14.8821 23 20.8482 22.9589 24.6554 21.6541C25.0679 21.5162 25.4366 21.2918 25.7297 21.0001C26.0229 20.7085 26.2317 20.3582 26.3384 19.9795C26.6402 18.9623 27 17.0925 27 14C27 10.9075 26.6402 9.03767 26.3384 8.02055ZM17.9696 14.339L12.3982 17.6267C12.3243 17.6748 12.2346 17.7001 12.1429 17.6986C12.066 17.6961 11.9907 17.6786 11.9223 17.6473C11.8481 17.6131 11.7861 17.5614 11.7431 17.4979C11.7 17.4345 11.6777 17.3617 11.6786 17.2877V10.7123C11.6777 10.6383 11.7 10.5655 11.7431 10.5021C11.7861 10.4386 11.8481 10.3869 11.9223 10.3527C11.9963 10.3178 12.0797 10.3012 12.1635 10.3049C12.2473 10.3085 12.3284 10.3321 12.3982 10.3733L17.9696 13.661C18.0344 13.6971 18.0877 13.7471 18.1247 13.8064C18.1617 13.8657 18.1811 13.9323 18.1811 14C18.1811 14.0677 18.1617 14.1343 18.1247 14.1936C18.0877 14.2529 18.0344 14.3029 17.9696 14.339Z" fill="white"/>
                  <path d="M26.3384 8.02055C26.2317 7.64177 26.0229 7.29154 25.7297 6.99988C25.4366 6.70821 25.0679 6.4838 24.6554 6.34589C20.6857 4.98973 14.3482 5 14 5C13.6518 5 7.31429 4.98973 3.34464 6.34589C2.93206 6.4838 2.5634 6.70821 2.27027 6.99988C1.97715 7.29154 1.76829 7.64177 1.66161 8.02055C1.35982 9.03767 1 10.9075 1 14C1 17.0925 1.35982 18.9623 1.66161 19.9795C1.76829 20.3582 1.97715 20.7085 2.27027 21.0001C2.5634 21.2918 2.93206 21.5162 3.34464 21.6541C7.15179 22.9589 13.1179 23 13.9187 23H14.0812C14.8821 23 20.8482 22.9589 24.6554 21.6541C25.0679 21.5162 25.4366 21.2918 25.7297 21.0001C26.0229 20.7085 26.2317 20.3582 26.3384 19.9795C26.6402 18.9623 27 17.0925 27 14C27 10.9075 26.6402 9.03767 26.3384 8.02055ZM17.9696 14.339L12.3982 17.6267C12.3243 17.6748 12.2346 17.7001 12.1429 17.6986C12.066 17.6961 11.9907 17.6786 11.9223 17.6473C11.8481 17.6131 11.7861 17.5614 11.7431 17.4979C11.7 17.4345 11.6777 17.3617 11.6786 17.2877V10.7123C11.6777 10.6383 11.7 10.5655 11.7431 10.5021C11.7861 10.4386 11.8481 10.3869 11.9223 10.3527C11.9963 10.3178 12.0797 10.3012 12.1635 10.3049C12.2473 10.3085 12.3284 10.3321 12.3982 10.3733L17.9696 13.661C18.0344 13.6971 18.0877 13.7471 18.1247 13.8064C18.1617 13.8657 18.1811 13.9323 18.1811 14C18.1811 14.0677 18.1617 14.1343 18.1247 14.1936C18.0877 14.2529 18.0344 14.3029 17.9696 14.339Z" fill="#9945FF" fill-opacity="0.04"/>
                  </svg>
                </a>
              </li>
            </ul>
        </div>
         <div className="sol__footer-links-first">
            <ul>
              <li><span>Solana</span></li>
              <li><a href="">Grants</a></li>
              <li><a href="">Break Solana</a></li>
              <li><a href="">Media Kit</a></li>
              <li><a href="">Careers</a></li>
              <li><a href="">Disclaimer</a></li>
            </ul>
          </div>
          <div className="sol__footer-links-last">
            <ul>
              <li><span>Get connected</span></li>
              <li><a href="">Ecosystem</a></li>
              <li><a href="">Blog</a></li>
              <li><a href="">Newsletter</a></li>
            </ul>
          </div>
          <div className="sol__footer-localize">
            <form action="">
              <label htmlFor="">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.36 14C16.44 13.34 16.5 12.68 16.5 12C16.5 11.32 16.44 10.66 16.36 10H19.74C19.9 10.64 20 11.31 20 12C20 12.69 19.9 13.36 19.74 14M14.59 19.56C15.19 18.45 15.65 17.25 15.97 16H18.92C17.9512 17.6683 16.4141 18.932 14.59 19.56ZM14.34 14H9.66C9.56 13.34 9.5 12.68 9.5 12C9.5 11.32 9.56 10.65 9.66 10H14.34C14.43 10.65 14.5 11.32 14.5 12C14.5 12.68 14.43 13.34 14.34 14ZM12 19.96C11.17 18.76 10.5 17.43 10.09 16H13.91C13.5 17.43 12.83 18.76 12 19.96ZM8 8H5.08C6.03886 6.32721 7.5748 5.06149 9.4 4.44C8.8 5.55 8.35 6.75 8 8ZM5.08 16H8C8.35 17.25 8.8 18.45 9.4 19.56C7.57862 18.9317 6.04485 17.6677 5.08 16ZM4.26 14C4.1 13.36 4 12.69 4 12C4 11.31 4.1 10.64 4.26 10H7.64C7.56 10.66 7.5 11.32 7.5 12C7.5 12.68 7.56 13.34 7.64 14M12 4.03C12.83 5.23 13.5 6.57 13.91 8H10.09C10.5 6.57 11.17 5.23 12 4.03ZM18.92 8H15.97C15.657 6.76146 15.1936 5.5659 14.59 4.44C16.43 5.07 17.96 6.34 18.92 8ZM12 2C6.47 2 2 6.5 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2Z" fill="#D6D6D6"/>
                  <path d="M16.36 14C16.44 13.34 16.5 12.68 16.5 12C16.5 11.32 16.44 10.66 16.36 10H19.74C19.9 10.64 20 11.31 20 12C20 12.69 19.9 13.36 19.74 14M14.59 19.56C15.19 18.45 15.65 17.25 15.97 16H18.92C17.9512 17.6683 16.4141 18.932 14.59 19.56ZM14.34 14H9.66C9.56 13.34 9.5 12.68 9.5 12C9.5 11.32 9.56 10.65 9.66 10H14.34C14.43 10.65 14.5 11.32 14.5 12C14.5 12.68 14.43 13.34 14.34 14ZM12 19.96C11.17 18.76 10.5 17.43 10.09 16H13.91C13.5 17.43 12.83 18.76 12 19.96ZM8 8H5.08C6.03886 6.32721 7.5748 5.06149 9.4 4.44C8.8 5.55 8.35 6.75 8 8ZM5.08 16H8C8.35 17.25 8.8 18.45 9.4 19.56C7.57862 18.9317 6.04485 17.6677 5.08 16ZM4.26 14C4.1 13.36 4 12.69 4 12C4 11.31 4.1 10.64 4.26 10H7.64C7.56 10.66 7.5 11.32 7.5 12C7.5 12.68 7.56 13.34 7.64 14M12 4.03C12.83 5.23 13.5 6.57 13.91 8H10.09C10.5 6.57 11.17 5.23 12 4.03ZM18.92 8H15.97C15.657 6.76146 15.1936 5.5659 14.59 4.44C16.43 5.07 17.96 6.34 18.92 8ZM12 2C6.47 2 2 6.5 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2Z" fill="#9945FF" fill-opacity="0.04"/>
                </svg>
              </label>
              <select name="" id="">
                <option value="">EN</option>
                <option value="">FR</option>
                <option value="">DE</option>
                <option value="">ES</option>
                <option value="">IT</option>
                <option value="">JP</option>
                <option value="">KR</option>
                <option value="">CN</option>
                <option value="">RU</option>
                <option value="">TR</option>
              </select>
            </form>
          </div>
      </div>
      <div className="sol__footer-btm">
        <p>© 2022 Solana Foundation. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer