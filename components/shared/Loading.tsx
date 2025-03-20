export default function Loading() {
  return (
    <>
      <style jsx>{`
        @tailwind base;
        @tailwind components;
        @tailwind utilities;

        @layer utilities {
          @keyframes blink {
            0%,
            80%,
            100% {
              opacity: 0;
            }
            40% {
              opacity: 1;
            }
          }
          .animate-blink {
            animation: blink 1.4s infinite both;
          }
          .animation-delay-200 {
            animation-delay: 0.2s;
          }
          .animation-delay-400 {
            animation-delay: 0.4s;
          }
        }
      `}</style>
      <div className="flex justify-center items-center text-2xl">
        <span className="animate-blink">.</span>
        <span className="animate-blink animation-delay-200">.</span>
        <span className="animate-blink animation-delay-400">.</span>
      </div>
    </>
  );
}
