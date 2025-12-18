import Image from "next/image";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import President from "@/images/staff/president.jpg";
import test from "@/images/test.ico";

const StaffData = [
    {
        Name: "Ben",
        Title: "President of MSU Esports",
        Image: President,
        Teams: ["Valorant White", "League of Legends Maroon"],
        info:
        [
            "Detroit, MI",
            "Mechincal Engineering",
            "Junior",
        ]
    }
]

export default function Staff() {
  return (
    <div className="w-full max-w-sm overflow-hidden bg-gradient-to-b from-red-900 to-red-800">
        <Card>
            {/* Image */}
            <div className="relative w-full h-64">
                <Image
                    src={StaffData[0].Image}
                    alt={`${StaffData[0].Name} - ${StaffData[0].Title}`}
                    fill
                    className="object-cover"
                />
            </div>

            {/* Name & Title */}
            <div className="bg-red-900 px-4 py-3 text-center">
                <CardTitle className="font-bold text-lg text-white">{StaffData[0].Name}</CardTitle>
                <CardHeader className="text-sm text-white">{StaffData[0].Title}</CardHeader>
            </div>

            {/* Teams */}
            <div className="px-4 py-3 text-center">
                <div className="space-y-1">
                    <p className="text-black text-sm">
                        {
                            StaffData[0].Teams.map((team, index) => (
                                <span key={index}>
                                    {team}{index < StaffData[0].Teams.length - 1 ? ' / ' : ''}
                                </span>
                            ))
                        }
                    </p>
                </div>
            </div>

            {/* Additional Info */}
            <div className="px-4 py-4 space-y-2">
                {
                    StaffData[0].info.map((item, index) => (
                        <div key={index}>
                            <p className="text-black text-sm">
                                <Image src={test} alt="Test Icon" className="inline-block w-4 h-4 mr-2" />
                                {item}
                            </p>
                        </div>
                    ))
                }
            </div>
        </Card>
    </div>
  );
}
