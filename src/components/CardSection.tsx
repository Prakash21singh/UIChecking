const CardSection = ({ children }: any) => {
  return (
    <>
      <div className="w-full h-[250px] flex justify-between  relative bg-dark-1 rounded-md opacity-90">
        <div className="w-[8%] flex flex-col h-full justify-between p-3 bg-transparent">
          <img src="qmark.svg" alt="QuestionMark" width={20} />
          <img src="menu.svg" alt="menu" width={17} />
          <div></div>
        </div>
        <div className="mr-3 w-[90%]  ">
          <div className="h-full overflow-auto custom-scrollbar px-5">
            {children}
          </div>
        </div>
      </div>
      <div className="w-[80%] mx-auto h-1 rounded-xl mt-2 bg-zinc-700" />
    </>
  );
};

export default CardSection;
