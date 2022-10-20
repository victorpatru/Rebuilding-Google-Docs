import { Timestamp } from "firebase/firestore";

interface DocumentProps {
  id: string;
  filename: string;
  date: Timestamp;
}

function DocumentRow({ id, filename, date }: DocumentProps) {
  console.log(typeof id);
  return (
    <div>
      <i className="fa-regular fa-file-word"></i>
      <p className="flex-grow pl-5 w-10 pr-10 truncate">{filename}</p>
      <p className="pr-5 text-sm">{date?.toDate().toLocaleDateString()}</p>
    </div>
  );
}
export default DocumentRow;
