import { Timestamp } from "firebase/firestore";
import { useRouter } from "next/router";
import { IconButton } from "@material-tailwind/react";

interface DocumentProps {
  id: string;
  filename: string;
  date: Timestamp;
}

function DocumentRow({ id, filename, date }: DocumentProps) {
  return (
    <div className="flex items-center max-w-3xl mx-auto p-5 rounded-lg hover:bg-gray-100 text-gray-700 text-base cursor-pointer">
      <i className="fa-solid fa-file-word fa-xl text-[#1e96f2]" aria-hidden></i>
      <p className="flex-grow pl-5 w-10 pr-10 truncate">{filename}</p>
      <p className="pr-5 text-sm">{date?.toDate().toLocaleDateString()}</p>
      <IconButton
        color="gray"
        variant="text"
        size="lg"
        ripple={true}
        className="border-0 rounded-full"
      >
        <i className="fa-solid fa-ellipsis-vertical fa-xl text-gray-600"></i>
      </IconButton>
    </div>
  );
}
export default DocumentRow;
