const coffeeTypes = [
  { image: "dell.jpg" },
  { image: "ciscolog.png" },
  { image: "hplogo2.png" },
  { image: "kasplog.jpeg" },
  { image: "fortineticon.jpeg" },
];

const Global = () => {
  return (
    <div className="bg-white w-full my-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5  gap-8 justify-center">
          {coffeeTypes.map((type, index) => (
            <div
              key={index}
              className="bg-white text-gray-300 p-6 rounded-lg hover:shadow-md transition-shadow duration-300 flex justify-center items-center"
            >
              <div className="w-60 h-60 flex justify-center items-center">
                <img src={type.image} alt="typeType" className="w-40 h-40 object-contain" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Global;
