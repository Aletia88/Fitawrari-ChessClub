const Footer = () => {
    const date = new Date().getFullYear();
  
    return (
      <footer className="bg-gray-900 text-white bottom-0" id="footer">
        <div className="container mx-auto py-8 px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-4 md:mb-0 border-r-2">
              <h4 className="text-xl font-bold mb-4 uppercase">Recipe Realm</h4>
              <p className="text-sm">""</p>
            </div>
            <div>
              <h1>Contact Us</h1>
              <p>Phone: +251901567597</p>
              <p>Email: Samrawitgirma31@gmail.com</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-4">
            <p className="text-sm text-gray-500 text-center">
              &copy; {date} Recipe Realm. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  