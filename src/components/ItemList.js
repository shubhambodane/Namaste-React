import { CDN_URL } from '../utils/constants';

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-400 shadow-md border-b-2 text-left
          "
        >
          <div className="mb-2 flex justify-between">
            <div className="flex flex-col">
              <span className=" font-bold text-lg py-4">
                {item.card.info.name}
              </span>
              <span className=" "> ₹{item.card.info.price / 100}</span>
            </div>
            <div>
              <button className=" w-auto absolute bg-green-200 p-2 shadow-lg rounded-md">
                Add +
              </button>
              <img
                className="w-32 m-2"
                src={CDN_URL + item.card.info.imageId}
              ></img>
            </div>
          </div>
          <div>
            <p className="italic text-xs"> {item.card.info.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
