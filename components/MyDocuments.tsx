import { DocumentData, QuerySnapshot } from "firebase/firestore";
import DocumentRow from "./DocumentRow";

interface SnapshotType {
  snapshot: QuerySnapshot<DocumentData> | null;
}

function MyDocuments({ snapshot }: SnapshotType) {
  return (
    <section className="bg-white p-10">
      <div className="max-w-3xl mx-auto mt-8 text-gray-600">
        <div className="flex justify-between items-center">
          <h2 className="text-md font-medium">My Documents</h2>

          <div className="flex items-center">
            <span>Date Created</span>
            <i className="fa-solid fa-folder ml-10 fa-xl"></i>
          </div>
        </div>
      </div>

      {snapshot &&
        snapshot?.docs.map((doc) => (
          <DocumentRow
            key={doc.id}
            id={doc.id}
            filename={doc.data().filename}
            date={doc.data().timestamp}
          />
        ))}
    </section>
  );
}
export default MyDocuments;
