import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();

  return (
    <div className="bg-blue-100 p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">OverView</h1>
      <div className="flex flex-col lg:flex-row gap-6">
        <img src="\src\public\assets\btc.png" alt={`Token ${id}`} className="w-full  lg:w-1/6 object-cover rounded shadow" />
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold">BTC</h2>
          <p className="text-gray-700">This is a detailed description of BTC.</p>
          <p className="text-lg font-bold text-blue-500">$ 97104</p>
          <div className="flex gap-4">
            <button className="px-4 py-2 bg-green-500 text-white rounded">Buy Now</button>
            <button className="px-4 py-2 bg-blue-500 text-white rounded">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
