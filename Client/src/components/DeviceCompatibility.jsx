import { FaAndroid, FaApple } from "react-icons/fa";
import { MdTabletMac } from "react-icons/md";

function DeviceCompatibility() {
  return (
    <section className="bg-purple-600 text-white py-10 px-4 rounded-xl max-w-6xl mx-auto">
      <h2 className="text-2xl font-semibold text-center mb-8">Device Compatibility</h2>
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-6">
        {/* Android Card */}
        <div className="bg-white text-black p-6 rounded-xl flex-1">
          <div className="flex items-center text-xl font-bold mb-4 gap-2">
            <FaAndroid className="text-2xl" /> android
          </div>
          <ul className="list-disc list-inside text-sm space-y-2">
            <li>All devices with RAM 3GB and above except Samsung</li>
            <li>All Samsung devices with RAM 2GB and above</li>
            <li>
              Devices with 11 inches screen and below (Samsung A9+ is not compatible)
            </li>
          </ul>
        </div>

        {/* iOS Card */}
        <div className="bg-white text-black p-6 rounded-xl flex-1">
          <div className="flex items-center text-xl font-bold mb-4 gap-2">
            <FaApple className="text-2xl" /> iOS
          </div>
          <ul className="list-disc list-inside text-sm space-y-2">
            <li>iPhone 6S and above</li>
            <li>iPad mini 4 and above</li>
            <li>iPad Air 2 and above</li>
            <li>iPad 5th gen and above</li>
            <li>Pad Pro 11 inches only</li>
          </ul>
        </div>

        {/* Amazon Fire Card */}
        <div className="bg-white text-black p-6 rounded-xl flex-1">
          <div className="flex items-center text-xl font-bold mb-4 gap-2 text-purple-700">
            <MdTabletMac className="text-2xl" /> Amazon Fire
          </div>
          <ul className="list-disc list-inside text-sm space-y-2 text-gray-600">
            <li>Fire 7 (2022 release)</li>
            <li>Fire 8 (2020 and 2022 release)</li>
            <li>Fire 8 Plus (2020 and 2022 release)</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default DeviceCompatibility;
