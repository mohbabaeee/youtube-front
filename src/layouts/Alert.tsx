import { CircleX } from "lucide-react";
import { useState } from "react";

export default function Alert() {
  const [isClosed, setIsClosed] = useState(false);

  return (
    <div
      className={`w-full bg-neutral-900 flex text-neutral-200 justify-center text-3xl p-3 gap-10 ${
        isClosed ? "hidden" : undefined
      }`}
    >
      <p>!برای لود شدن تصاویر باید با فیلترشکن وارد شی</p>
      <button
        onClick={() => {
          setIsClosed(true);
        }}
        className="hover:bg-neutral-500 transition rounded-full"
      >
        <CircleX size={40} />
      </button>
    </div>
  );
}
