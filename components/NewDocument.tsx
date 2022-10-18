import { IconButton } from "@material-tailwind/react";
import Image from "next/image";

function NewDocument() {
  return (
    <section className="bg-[#F8F9FA] p-10">
      <div className="max-w-3xl mx-auto ">
        {/* Start new document Section */}
        <div className="flex justify-between items-center pt-4 pb-6">
          <h2 className="text-gray-600 text-xl">Start a new document</h2>
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
        <div>
          <div className="relative h-52 w-40 border-2 cursor-pointer hover:border-blue-700">
            <Image src="/new_docs_image.png" layout="fill" />
          </div>

          <p className="text-gray-600 text-sm mt-2 ml-2 font-semibold">Blank</p>
        </div>
      </div>
    </section>
  );
}
export default NewDocument;
