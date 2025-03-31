const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
      {/* Loading Spinner */}
      <div className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:h-40 lg:w-40 mb-4">
        <div className="absolute inset-0 border-4 border-[#003366] border-t-transparent rounded-full animate-spin"></div>
      </div>

      {/* GOLD PACK LIVE Text */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#003366] mb-6">
        GOLD PACK LIVE
      </h1>

      {/* LOADING Text */}
      <p className="text-lg sm:text-xl md:text-2xl text-[#003366]">LOADING</p>
    </div>
  );
};

export default LoadingSpinner;
