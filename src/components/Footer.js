export default function Footer() {
  return (
    <footer className="bg-white border-t py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-600">© 2025 Desa Gebang. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="text-gray-600 hover:text-gray-800">Privacy Policy</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}