const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md">
      <span
        className="
          w-12 h-12
          border-[5px]
          border-dotted
          border-white
          rounded-full
          animate-spin
        "
      />
    </div>
  );
};

export default Loader;