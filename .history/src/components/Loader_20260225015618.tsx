const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md">
      
      <div className="relative text-white font-sans text-5xl tracking-[4px] mt-10">
        
        {/* الخط المتحرك */}
        <span
          className="
            absolute right-[70px] bottom-[10px]
            h-[28px] w-[5.15px]
            bg-current
            animate-[loaderLine_1s_linear_infinite_alternate]
          "
        />

        {/* الكرة الحمراء */}
        <span
          className="
            absolute left-[125px] top-[2px]
            w-[10px] h-[10px]
            rounded-full
            bg-red-500
            animate-[loaderBall_1s_linear_infinite_alternate]
          "
        />

        Loading
      </div>

      {/* Keyframes داخل style */}
      <style>
        {`
        @keyframes loaderBall {
          0% { transform: translate(0px, 0px) scaleX(1); }
          14% { transform: translate(-12px, -16px) scaleX(1.05); }
          28% { transform: translate(-27px, -28px) scaleX(1.07); }
          42% { transform: translate(-46px, -35px) scaleX(1.1); }
          57% { transform: translate(-70px, -37px) scaleX(1.1); }
          71% { transform: translate(-94px, -32px) scaleX(1.07); }
          85% { transform: translate(-111px, -22px) scaleX(1.05); }
          100% { transform: translate(-125px, -9px) scaleX(1); }
        }

        @keyframes loaderLine {
          0% { box-shadow: 0 -6px, -122.9px -8px; }
          25%, 75% { box-shadow: 0 0px, -122.9px -8px; }
          100% { box-shadow: 0 0px, -122.9px -16px; }
        }
        `}
      </style>
    </div>
  );
};

export default Loader;