import StaffCard from "@/components/staffCard";
import { STAFF_LIST } from "@/data/staff";

export default function Staff() {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <section className="bg-linear-to-r from-[#5D1725] to-[#3a0f17] py-12 sm:py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white text-center">Staff</h1>
          <p className="text-[#DAC79D] text-center mt-2 text-sm sm:text-base">Meet the MSU Esports leadership team</p>
        </div>
      </section>

      {/* Executive Committee */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">Executive Committee</h2>
          <div className="w-16 h-1 bg-[#5D1725] rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {
            STAFF_LIST.filter(staff => staff.level === 'Executive Committee').map((staff, index) => (
              <StaffCard key={index} staff={staff} />
            ))
          }
        </div>
      </section>

      {/* Board of Directors */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">Board of Directors</h2>
          <div className="w-16 h-1 bg-[#5D1725] rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {
            STAFF_LIST.filter(staff => staff.level === 'Board of Directors').map((staff, index) => (
              <StaffCard key={index} staff={staff} />
            ))
          }
        </div>
      </section>
    </div>
  );
}
