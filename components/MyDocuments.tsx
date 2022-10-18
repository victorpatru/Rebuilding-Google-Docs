function MyDocuments() {
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
    </section>
  );
}
export default MyDocuments;
