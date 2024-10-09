function App() {
  return (
    <>
      <main>
        <div className="flex flex-col lg:flex-row">
          <div className="w-fit">
            <img src="/images/desktop-image-hero-1.jpg" className="bg-cover " alt="" />
          </div>
          <div className="bg-white relative lg:w-[700px]  h-[523px] text-center p-9 lg:p-[120px]">
            <h1 className="text-left text-4xl mb-6  font-[700]">
              Discover innovative ways to decorate
            </h1>
            <p className="text-left text-[#A7A7A7] font-[500]">
              We provide unmatched quality, comfort, and style for property
              owners across the country. Our experts combine form and function
              in bringing your vision to life. Create a room in your own style
              with our collection and make your property a reflection of you and
              what you love.{" "}
            </p>
            <div className="flex items-center gap-4">
              <button className="tracking-[10px] hover:text-[#A7A7A7] duration-300 font-semibold mt-4  flex ">
                SHOP NOW
              </button>
              <img src="/images/icon-arrow.svg" className="mt-4" alt="" />
            </div>

            <div className="flex absolute  bottom-0 lg:left-0 right-0 -top-16  ">
              <button className="w-[60px] flex justify-center h-[60px] bg-black">
                <img
                  src="/images/icon-angle-left.svg"
                  className="mt-4"
                  alt=""
                />
              </button>
              <button className="w-[60px] flex justify-center  h-[60px] bg-black">
                <img
                  src="/images/icon-angle-right.svg"
                  className="mt-4"
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex-col lg:flex-row top-10 left-[60px] flex items-center gap-12">
          <img src="/images/logo.svg" alt="" />

          <ul className="flex  text-white gap-8 font-semibold">
            <li>home</li>
            <li>shop</li>
            <li>about</li>
            <li>contact</li>
          </ul>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-[50%]  h-[223px]">
            <img
              src="/images/image-about-dark.jpg"
              className="w-full h-full"
              alt=""
            />
          </div>
          <div className="lg:w-[40%] bg-white h-[223px] p-9 lg:p-[34px]">
            <h1 className="tracking-[6px] mb-2 font-bold">
              ABOUT OUR FURNITURE
            </h1>
            <p className="text-[#A7A7A7] p-1 text-[14px]">
              Our multifunctional collection blends design and function to suit
              your individual taste. Make each room unique, or pick a cohesive
              theme that best express your interests and what inspires you. Find
              the furniture pieces you need, from traditional to contemporary
              styles or anything in between. Product specialists are available
              to help you create your dream space.
            </p>
          </div>
          <div className="lg:w-[55%] mt-14 lg:mt-0 bg-red-500 h-[223px]">
            <img
              src="/images/image-about-light.jpg"
              className="w-full h-full"
              alt=""
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
