const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl p-4 m-4">Contact Us</h1>
      <input
        type="text"
        placeholder="Name"
        className="border-2 border-gray-300 p-2 m-2 rounded-md"
      />
      <input
        type="email"
        placeholder="Email"
        className="border-2 border-gray-300 p-2 m-2 rounded-md"
      />
      <textarea
        placeholder="Message"
        className="border-2 border-gray-300 p-2 m-2 rounded-md"
      ></textarea>
      <button className="bg-blue-500 text-white p-2 m-2 rounded-md">
        Submit
      </button>
      {/* <p> Email : shubhambodane@gmail.com</p>
      <p> Contact Number : 8484055506</p> */}
    </div>
  );
};

export default Contact;
