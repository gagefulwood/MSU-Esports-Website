import Image from "next/image";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import President from "@/images/staff/president.jpg";
import test from "@/images/test.ico";

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
    <div>
        {/* Executive Committee */}
        <section className="w-full border-b-2 border-gray-300 pb-4">
            <h1 className="text-center text-3xl font-bold">Executive Committee</h1>
        </section>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4 pb-4 px-2 sm:px-4">
            {ExecData.map((staff, index) => (
                <div key={index} className="overflow-visible bg-linear-to-b from-[#5D1725] to-[#5D1725] rounded-lg w-full max-w-sm mx-auto shadow-lg">
                    <Card className="py-0 gap-0 overflow-visible rounded-lg shadow-lg bg-[#5D1725]">
                        
                        {/* Image */}
                        <div className="relative w-full h-48 sm:h-56 lg:h-64 overflow-visible rounded-t-lg">
                            <Image
                                src={staff.Image}
                                alt={`${staff.Name} - ${staff.Title}`}
                                fill
                                className="object-cover rounded-t-lg"
                            />
                            
                            {/* Name & Title Overlay */}
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-4/5 bg-white px-2 sm:px-4 py-2 sm:py-3 text-center rounded-lg">
                                <CardTitle className="font-bold text-base sm:text-lg text-black">{staff.Name}</CardTitle>
                                <CardHeader className="text-xs sm:text-sm text-black">{staff.Title}</CardHeader>
                            </div>
                        </div>

                        {/* Additional Info */}
                        <div className="px-2 sm:px-4 py-3 sm:py-4 space-y-2 bg-[#5D1725] rounded-b-lg mt-8">
                            {
                                staff.info.map((item, index) => (
                                    <div key={index}>
                                        <p className="text-white text-sm">
                                            <Image src={test} alt="Test Icon" className="inline-block w-4 h-4 mr-2" />
                                            {item}
                                        </p>
                                    </div>
                                ))
                            }
                        </div>
                    </Card>
                </div>
            ))}
        </section>

        {/* Board of Directors */}
        <section className="w-full border-b-2 border-gray-300 pb-4 pt-8">
            <h1 className="text-center text-3xl font-bold">Board of Directors</h1>
        </section>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4 pb-4 px-2 sm:px-4">
            {DirectorData.map((staff, index) => (
                <div key={index} className="overflow-visible bg-linear-to-b from-[#5D1725] to-[#5D1725] rounded-lg w-full max-w-sm mx-auto shadow-lg">
                    <Card className="py-0 gap-0 overflow-visible rounded-lg shadow-lg bg-[#5D1725]">
                        
                        {/* Image */}
                        <div className="relative w-full h-48 sm:h-56 lg:h-64 overflow-visible rounded-t-lg">
                            <Image
                                src={staff.Image}
                                alt={`${staff.Name} - ${staff.Title}`}
                                fill
                                className="object-cover rounded-t-lg"
                            />
                            
                            {/* Name & Title Overlay */}
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-4/5 bg-white px-2 sm:px-4 py-2 sm:py-3 text-center rounded-lg">
                                <CardTitle className="font-bold text-base sm:text-lg text-black">{staff.Name}</CardTitle>
                                <CardHeader className="text-xs sm:text-sm text-black">{staff.Title}</CardHeader>
                            </div>
                        </div>

                        {/* Additional Info */}
                        <div className="px-2 sm:px-4 py-3 sm:py-4 space-y-2 bg-[#5D1725] rounded-b-lg mt-8">
                            {
                                staff.info.map((item, index) => (
                                    <div key={index}>
                                        <p className="text-white text-sm">
                                            <Image src={test} alt="Test Icon" className="inline-block w-4 h-4 mr-2" />
                                            {item}
                                        </p>
                                    </div>
                                ))
                            }
                        </div>
                    </Card>
                </div>
            ))}
        </section>
    </div>

  );
}