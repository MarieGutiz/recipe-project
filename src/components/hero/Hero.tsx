import Feature from "../features/feature";
import style from "./hero.module.css";

const Hero = () => {
  return (
    <div className={style["home-container"]}>
      <section className={style["home-hero"]}>
        <div className={style["home-main"]}>
          <div className={style["home-video"]}>
            <video
              poster="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDZ8fGZvb2R8ZW58MHx8fHwxNjg5MTUxOTczfDA&ixlib=rb-4.0.3&w=1200"
              className={style["home-video2"]}
            ></video>
            <div className={style["home-tint"]}></div>
          </div>
          <div className={style["home-content"]}>
            <header data-thq="thq-navbar" className={style["home-navbar"]}>
              <img
                alt="logo"
                src="../src/assets/logo/recipe.png"
                className={style["home-logo"]}
              />
              <div data-thq="thq-burger-menu" className={style["home-menu"]}>
                <div className={style["home-links"]}>
                  <a href="#features" className={style["home-link link"]}>
                    Features
                  </a>
                  <span className={style["link"]}>How it works</span>
                  <span className={style["link"]}>Prices</span>
                  <a href="#find" className={style["home-link01 link"]}>
                    Contact
                  </a>
                </div>
                <button className={style["home-hamburger button"]}>
                  <svg viewBox="0 0 1024 1024" className={style["home-icon"]}>
                    <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                  </svg>
                </button>
              </div>
              <div
                data-thq="thq-mobile-menu"
                className={style["home-mobile-menu"]}
              >
                <div
                  data-thq="thq-mobile-menu-nav"
                  data-role="Nav"
                  className={style["home-nav"]}
                >
                  <div className={style["home-container1"]}>
                    <img alt="logo" src="" className={style["home-logo1"]} />
                    <div
                      data-thq="thq-close-menu"
                      className={style["home-menu-close"]}
                    >
                      <svg
                        viewBox="0 0 1024 1024"
                        className={style["home-icon02"]}
                      >
                        <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                      </svg>
                    </div>
                  </div>
                  <nav
                    data-thq="thq-mobile-menu-nav-links"
                    data-role="Nav"
                    className={style["home-nav1"]}
                  >
                    <span className={style["home-text02"]}>About</span>
                    <span className={style["home-text03"]}>Features</span>
                    <span className={style["home-text04"]}>Pricing</span>
                    <span className={style["home-text05"]}>Team</span>
                    <span className={style["home-text06"]}>Blog</span>
                  </nav>
                  <div className={style["home-container2"]}>
                    <button className={style["home-login button"]}>
                      Login
                    </button>
                    <button className={style["button"]}>Register</button>
                  </div>
                </div>
                <div className={style["home-icon-group"]}>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className={style["home-icon04"]}
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className={style["home-icon06"]}
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className={style["home-icon08"]}
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </div>
              </div>
            </header>
            <div className={style["home-center"]}>
              <div className={style["home-heading"]}>
                <h1 className={style["home-header"]}>
                  Cook healthy meals like a pro!
                </h1>
                <p className={style["home-caption"]}>
                  Find a recipe to prepare with love to yours!
                </p>
              </div>
              <div className={style["home-border"]}>
                <div className={style["home-filter"]}>
                  <img
                    alt="image"
                    src="../src/assets/Icons/location.svg"
                    className={style["home-image"]}
                  />
                  <input
                    type="text"
                    placeholder="Destination"
                    className={style["home-textinput input"]}
                  />
                  <input
                    type="date"
                    placeholder="Date"
                    className={style["home-textinput1 input"]}
                  />
                  <input
                    type="number"
                    placeholder="Group size"
                    className={style["home-textinput2 input"]}
                  />
                  <div className={style["home-search"]}>
                    <img
                      alt="image"
                      src="../src/assets/Icons/search.svg"
                      className={style["home-icon10"]}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="features" className={style["home-feaures"]}>
          <div className={style["home-content01"]}>
            <Feature></Feature>
            <Feature
              Icon="../src/assets/Icons/headset.svg"
              Header="24/7 Support"
            ></Feature>
            <Feature
              Icon="../src/assets/Icons/person.svg"
              Header="Private Tours"
            ></Feature>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
