import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer pt-1 mt-10">
      <div className="container mx-auto px-6 border-t-2 border-gray-600">
        <div className="sm:flex sm:mt-8">
          <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
            <div className="flex flex-col">
              <span className="font-bold text-gray-700 uppercase mb-2">
                Footer header 1
              </span>
              <span className="my-2">
                <a
                  href="/#"
                  className="text-gray-700  text-md hover:text-gray-500"
                >
                  link 1
                </a>
              </span>
              <span className="my-2">
                <a
                  href="/#"
                  className="text-gray-700  text-md hover:text-gray-500"
                >
                  link 1
                </a>
              </span>
              <span className="my-2">
                <a
                  href="/#"
                  className="text-gray-700  text-md hover:text-gray-500"
                >
                  link 1
                </a>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2">
                Footer header 2
              </span>
              <span className="my-2">
                <a
                  href="/#"
                  className="text-gray-700 text-md hover:text-gray-500"
                >
                  link 1
                </a>
              </span>
              <span className="my-2">
                <a
                  href="/#"
                  className="text-gray-700  text-md hover:text-gray-500"
                >
                  link 1
                </a>
              </span>
              <span className="my-2">
                <a
                  href="/#"
                  className="text-gray-700 text-md hover:text-gray-500"
                >
                  link 1
                </a>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2">
                Footer header 3
              </span>
              <span className="my-2">
                <a
                  href="/#"
                  className="text-gray-700  text-md hover:text-gray-500"
                >
                  link 1
                </a>
              </span>
              <span className="my-2">
                <a
                  href="/#"
                  className="text-gray-700  text-md hover:text-gray-500"
                >
                  link 1
                </a>
              </span>
              <span className="my-2">
                <a
                  href="/#"
                  className="text-gray-700  text-md hover:text-gray-500"
                >
                  link 1
                </a>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2">
                Footer header 4
              </span>
              <span className="my-2">
                <a
                  href="/#"
                  className="text-gray-700  text-md hover:text-gray-500"
                >
                  link 1
                </a>
              </span>
              <span className="my-2">
                <a
                  href="/#"
                  className="text-gray-700  text-md hover:text-gray-500"
                >
                  link 1
                </a>
              </span>
              <span className="my-2">
                <a
                  href="/#"
                  className="text-gray-700  text-md hover:text-gray-500"
                >
                  link 1
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-10">
        <div className="mt-8 flex flex-col">
          <div>
            <a
              href="/#"
              className="bg-purple-500 hover:bg-purple-700 text-white py-2 px-9 rounded-full"
            >
              Download App!
            </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6">
        <div className="mt-8 flex flex-col items-center">
          <div className="sm:w-2/3 text-center py-6">
            <p className="text-sm text-gray-700 font-bold mb-2">
              © 2022 by DoggyMatch
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
