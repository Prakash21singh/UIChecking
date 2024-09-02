import CardSection from "./components/CardSection";

const App = () => {
  return (
    <div className="relative w-full h-screen font-Jakarta">
      <img
        src="/bg2.png"
        alt="backgound"
        className="absolute -z-20 w-full h-full object-cover"
      />
      <span className="span-bg absolute w-full h-full -z-10 opacity-70"></span>
      <div className="relative z-10 w-full h-full flex items-center justify-end">
        <div className="w-[40%] mr-5 text-white gap-3 flex flex-col">
          <div>
            <CardSection>
              <div className="flex w-full justify-between items-center gap-3 bg-black mt-5 px-2 py-2 rounded-xl">
                <button className="button-active button-shadow">About</button>
                <button className="button">About</button>
                <button className="button">About</button>
              </div>
              <div className="w-full text-gray-100 mt-5">
                <p className="text-text-primary">
                  Hello! I’m Dave, your sales rep here from Salesforce. I’ve
                  been working at this awesome company for 3 years now.
                </p>
                <p className="text-text-primary">
                  I was born and raised in Albany, NY& have been living in Santa
                  Carla for the past 10 years my wife Tiffany and my 4 year old
                  twin daughters- Emma and Ella. Both of them are just starting
                  school, so my calender is usually blocked between 9-10 AM.
                  This is a...
                </p>
              </div>
            </CardSection>
          </div>
          <div>
            <CardSection>
              <div className="flex w-full justify-between items-center gap-3  mt-5 px-2 py-2 rounded-xl">
                <button className="button-2 py-3">About</button>
                <div className="w-16"></div>
                <div className="w-[55%] flex items-center justify-around">
                  <button className="relative bg-white/10 text-white font-semibold py-3 px-6 rounded-full shadow-xl shadow-black/65">
                    <span className="absolute -z-10 -top-5 inset-0 bg-gradient-to-t from-white/40 to-transparent rounded-full blur-md"></span>
                    <span className="relative font-semibold">+ ADD IMAGE</span>
                  </button>
                  <div className="flex items-center justify-between gap-3">
                    <button className="bg-dark-2 w-12 h-12 flex justify-center items-center rounded-full">
                      <img
                        src="leftarr.svg"
                        alt="leftarray"
                        className="invert bg-transparent w-5"
                      />
                    </button>
                    <button className="bg-dark-2 w-12 h-12 flex justify-center items-center rounded-full">
                      <img
                        src="rightArr.svg"
                        alt="leftarray"
                        className="invert bg-transparent w-5"
                      />
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-full flex items-center justify-center gap-3 my-3">
                <img src="/image.png" height={120} width={150} alt="image1" />
                <img src="/image.png" height={120} width={150} alt="image2" />
                <img src="/image.png" height={120} width={150} alt="image3" />
              </div>
            </CardSection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
