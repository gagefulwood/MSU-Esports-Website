import Image from "next/image";
import { Card } from "@/components/ui/card";


// temporary interface for staff member
interface StaffMember {
  Name: string;
  Title: string;
  Image: any;
  info: string[];
}

export default function StaffCard({ staff }: { staff: StaffMember }) {
  return (
    <div className="group h-full">
      <Card className="h-full overflow-hidden bg-linear-to-b from-[#5D1725] to-[#3a0f17] border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105">
        
        {/* Image Container */}
        <div className="relative w-full h-56 sm:h-64 lg:h-72 overflow-hidden bg-gray-800">
          <Image
            src={staff.Image}
            alt={`${staff.Name} - ${staff.Title}`}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 space-y-4">

          {/* Name & Title */}
          <div className="space-y-1">
            <h3 className="text-lg sm:text-xl font-bold text-white">{staff.Name}</h3>
            <p className="text-[#DAC79D] text-sm sm:text-base font-semibold">{staff.Title}</p>
          </div>

          {/* replace this array with the data object */}
          {/* Info */}
          <div className="space-y-2 pt-2 border-t border-[#DAC79D]/40">
            {staff.info.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#DAC79D] shrink-0"></div>
                <p className="text-white text-xs sm:text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}