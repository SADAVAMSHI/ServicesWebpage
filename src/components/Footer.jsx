export default function Footer() {
  return (
    <footer id="contact" className="bg-[#e6f4ea] pt-20 pb-10 px-6 md:px-16 mt-20 border-t-4 border-purple-500">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-medium mb-4">Subscribe to our newsletter</h2>
        <p className="text-gray-600 mb-8 text-sm">To make your stay special and even more memorable</p>
        <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 cursor-pointer">
        Subscribe Now
        </button>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-gray-300 pt-12">
        <div className="space-y-4 text-sm text-gray-600">
          <h4 className="font-medium text-black text-base mb-6">Company</h4>
          <p><a href="#" className="hover:text-black">Home</a></p>
          <p><a href="#" className="hover:text-black">Studio</a></p>
          <p><a href="#" className="hover:text-black">Service</a></p>
          <p><a href="#" className="hover:text-black">Blog</a></p>
        </div>
        <div className="space-y-4 text-sm text-gray-600">
          <h4 className="font-medium text-black text-base mb-6">Terms & Policies</h4>
          <p><a href="#" className="hover:text-black">Privacy Policy</a></p>
          <p><a href="#" className="hover:text-black">Terms & Conditions</a></p>
          <p><a href="#" className="hover:text-black">Explore</a></p>
          <p><a href="#" className="hover:text-black">Accessibility</a></p>
        </div>
        <div className="space-y-4 text-sm text-gray-600">
          <h4 className="font-medium text-black text-base mb-6">Follow Us</h4>
          <p><a href="#" className="hover:text-black">Instagram</a></p>
          <p><a href="#" className="hover:text-black">LinkedIn</a></p>
          <p><a href="#" className="hover:text-black">Youtube</a></p>
          <p><a href="#" className="hover:text-black">Twitter</a></p>
        </div>
        <div className="space-y-4 text-sm text-gray-600">
          <h4 className="font-medium text-black text-base mb-6">Contact</h4>
          <p>1498w Fluton ste, STE 2D<br/>Chicago, IL 63867</p>
          <p>(123) 456789000</p>
          <p>info@elementum.com</p>
        </div>
      </div>
      <div className="text-center text-gray-500 text-xs mt-16">
        ©2026 Elementum. All rights reserved
      </div>
    </footer>
  );
}