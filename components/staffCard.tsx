import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Staff } from "@/types";


export default function StaffCard({ staff }: { staff: Staff }) {
  return (
    <div className="group h-full">
      <Card className="h-full overflow-hidden bg-linear-to-b from-[#5D1725] to-[#3a0f17] border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105">
        
        {/* Image Container */}
        <div className="relative w-full h-56 sm:h-64 lg:h-72 overflow-hidden bg-gray-800">
          <Image
            src={staff.imageUrl}
            alt={`${staff.name} - ${staff.role}`}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 space-y-4">

          {/* Name & Title */}
          <div className="space-y-1">
            <h3 className="text-lg sm:text-xl font-bold text-white">{staff.name}</h3>
            <p className="text-[#DAC79D] text-sm sm:text-base font-semibold">{staff.role}</p>
          </div>
        </div>
      </Card>
    </div>
  );
}