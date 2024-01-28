import { Link } from "react-router-dom";

const Join = () => {
  return (
    <>
      <header className="bg-blue-500 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Chitchat</h1>
          <div className="flex space-x-4">
            <a href="/register" className="text-white hover:underline">
              Register
            </a>
            <a href="/login" className="text-white hover:underline">
              Login
            </a>
          </div>
        </div>
      </header>
      <section className="container mx-auto mt-8 p-8 bg-white rounded shadow-md">
        <h2 className="text-3xl font-semibold mb-4">About Chitchat</h2>
        <p className="text-gray-600 mb-8">
          Welcome to Chitchat, your go-to platform for seeking expert advice.
          Connect with experienced individuals who are ready to share their
          knowledge and insights with you. Whether you have questions about
          technology, lifestyle, or any other topic, our experts are here to
          guide you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-4 bg-blue-100 rounded">
            <h3 className="text-xl font-semibold mb-2">Why Chitchat?</h3>
            <p className="text-gray-600">
              Chitchat brings together a community of experts across various
              fields. Our platform is designed to facilitate meaningful
              conversations and provide you with personalized advice based on
              your unique needs.
            </p>
          </div>
          <div className="p-4 bg-blue-100 rounded">
            <h3 className="text-xl font-semibold mb-2">How It Works</h3>
            <p className="text-gray-600">
              Join Chitchat, ask your questions, and engage in discussions with
              experts. Receive tailored advice and gain valuable insights that
              can help you make informed decisions.
            </p>
          </div>
          <div className="p-4 bg-blue-100 rounded">
            <h3 className="text-xl font-semibold mb-2">Get Started</h3>
            <p className="text-gray-600">
              Ready to explore Chitchat? Register for an account, log in, and
              start connecting with experts. Your journey to gaining valuable
              knowledge begins here.
            </p>
          </div>
        </div>
      </section>
    </>

  );
};

export default Join;
