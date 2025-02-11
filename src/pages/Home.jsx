function Home() {
  return (
    <div className="">
      <section className=" flex justify-center items-center py-20 mb-8">
        <img src="src\public\assets\banner.jpg" alt="Download" className=" h-64 object-cover rounded shadow-lg" />
      </section>
      <section>
        <h2 className="text-3xl font-bold mb-4 text-center">Welcome!</h2>
        <p className="text-gray-700 font-bold text-center">Simple Earn.</p>
        <p className="text-gray-700 font-bold text-center">No KYC.</p>
      </section>
    </div>
  );
}

export default Home;
