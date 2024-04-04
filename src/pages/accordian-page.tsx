import ReAccordian from "@/components/reusables/re-accordian";

const fadeIn = "";

const AccordianPage = () => {
  return (
    <div className="w-screen h-screen bg-slate-100 px-4 py-8">
      <ReAccordian data={[]} />
      <button
        className={`bg-blue-500 text-white px-3 py-2 rounded-md animate-fade ${fadeIn}`}
      >
        Hello
      </button>
    </div>
  );
};

export default AccordianPage;
