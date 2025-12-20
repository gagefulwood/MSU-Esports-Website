import StaffCard from "@/components/staffCard";
import President from "@/images/staff/president.jpg";

const ExecData = [
    {
        Name: "Ben",
        Title: "President of MSU Esports",
        Image: President,
        info:
        [
            "Detroit, MI",
            "Mechanical Engineering",
            "Junior",
        ]
    },
    {
        Name: "Anna",
        Title: "Vice President of Internal Affairs",
        Image: President,
        info:
        [
            "Detroit, MI",
            "English",
            "Junior",
        ]
    },
    {
        Name: "Kaylie",
        Title: "Vice President of External Affairs",
        Image: President,
        info:
        [
            "Detroit, MI",
            "Mechanical Engineering",
            "Junior",
        ]
    },
        {
        Name: "Mann",
        Title: "Secretary",
        Image: President,
        info:
        [
            "Detroit, MI",
            "English",
            "Junior",
        ]
    },
        {
        Name: "Alex",
        Title: "Treasurer",
        Image: President,
        info:
        [
            "Detroit, MI",
            "English",
            "Junior",
        ]
    },
        {
        Name: "Brayden",
        Title: "Esports Director",
        Image: President,
        info:
        [
            "Detroit, MI",
            "English",
            "Junior",
        ]
    },
]

const DirectorData = [
    {
        Name: "Braxton",
        Title: "Assistant Esports Director",
        Image: President,
        info:
        [
            "Detroit, MI",
            "English",
            "Junior",
        ]
    },
    {
        Name: "Madi",
        Title: "Media Director",
        Image: President,
        info:
        [
            "Detroit, MI",
            "English",
            "Junior",
        ]
    },
    {
        Name: "Brooks",
        Title: "Outreach Director",
        Image: President,
        info:
        [
            "Detroit, MI",
            "English",
            "Junior",
        ]
    },
    {
        Name: "Gage",
        Title: "Event Director",
        Image: President,
        info:
        [
            "Detroit, MI",
            "English",
            "Junior",
        ]
    },
    {
        Name: "Jacob",
        Title: "Stream Director",
        Image: President,
        info:
        [
            "Detroit, MI",
            "English",
            "Junior",
        ]
    },
]

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
          {ExecData.map((staff, index) => (
            <StaffCard key={index} staff={staff} />
          ))}
        </div>
      </section>

      {/* Board of Directors */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">Board of Directors</h2>
          <div className="w-16 h-1 bg-[#5D1725] rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {DirectorData.map((staff, index) => (
            <StaffCard key={index} staff={staff} />
          ))}
        </div>
      </section>
    </div>
  );
}