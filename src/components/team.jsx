// Define team members data
const teamMembers = [
  {
    id: 1,
    name: "Dr. Rajesh Kumar",
    specialty: "Cardiologist",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/028/287/384/small_2x/a-mature-indian-male-doctor-on-a-white-background-ai-generated-photo.jpg",
    experience: "15+ Years",
    social: {
      phone: "tel:+91-9876543210",
      instagram: "https://instagram.com/dr.rajesh",
      facebook: "https://facebook.com/dr.rajesh",
    },
  },
  {
    id: 2,
    name: "Dr. Priya Sharma",
    specialty: "Neurologist",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/028/287/384/small_2x/a-mature-indian-male-doctor-on-a-white-background-ai-generated-photo.jpg",
    experience: "12+ Years",
    social: {
      phone: "tel:+91-9876543211",
      instagram: "https://instagram.com/dr.priya",
      facebook: "https://facebook.com/dr.priya",
    },
  },
  {
    id: 3,
    name: "Dr. Amit Patel",
    specialty: "Orthopedic Surgeon",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/028/287/384/small_2x/a-mature-indian-male-doctor-on-a-white-background-ai-generated-photo.jpg",
    experience: "18+ Years",
    social: {
      phone: "tel:+91-9876543212",
      instagram: "https://instagram.com/dr.amit",
      facebook: "https://facebook.com/dr.amit",
    },
  },
  {
    id: 4,
    name: "Dr. Sunita Verma",
    specialty: "Gynecologist",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/028/287/384/small_2x/a-mature-indian-male-doctor-on-a-white-background-ai-generated-photo.jpg",
    experience: "14+ Years",
    social: {
      phone: "tel:+91-9876543213",
      instagram: "https://instagram.com/dr.sunita",
      facebook: "https://facebook.com/dr.sunita",
    },
  },
]

export default function Team() {
  return (
    <div className="flex flex-col items-center w-full md:px-[50px] md:pb-[50px] px-[25px] pb-[25px] md:my-10 bg-gray-50">
      <h1 className="text-[#0D5094] figtree-semibold text-4xl mt-6 md:mt-0 md:text-7xl mb-6 md:mb-12 relative after:absolute after:bottom-0 after:left-0 after:h-1 after:w-16 lg:after:w-32 after:bg-[#0D5094]">
        Our Team
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 w-full mt-6 md:mt-8">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="group relative w-full overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 cursor-pointer bg-white"
          >
            {/* Image Container */}
            <div className="relative overflow-hidden">
              <img
                className="object-cover w-full h-[350px] md:h-[400px] transition-transform duration-300 group-hover:scale-110"
                src={member.image || "/placeholder.svg"}
                alt={member.name}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-[#0D5094] p-4 md:p-6 transform translate-y-0 transition-transform duration-300">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-[#fefefe] figtree-semibold text-lg md:text-xl lg:text-2xl mb-1">{member.name}</h3>
                  <p className="text-[#fefefe]/90 poppins-normal text-sm md:text-base mb-1">{member.specialty}</p>
                  <p className="text-[#fefefe]/70 text-xs md:text-sm">{member.experience}</p>
                </div>

                {/* Social Media Icons */}
                <div className="flex flex-col space-y-2 ml-4">
                  <a
                    href={member.social.phone}
                    className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[#DE2225] hover:scale-110 group/icon"
                  >
                    <i className="fa-solid fa-phone text-[#DE2225] text-sm md:text-base group-hover/icon:text-white transition-colors duration-300"></i>
                  </a>
                  <a
                    href={member.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[#DE2225] hover:scale-110 group/icon"
                  >
                    <i className="fa-brands fa-instagram text-[#DE2225] text-sm md:text-base group-hover/icon:text-white transition-colors duration-300"></i>
                  </a>
                  <a
                    href={member.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[#DE2225] hover:scale-110 group/icon"
                  >
                    <i className="fa-brands fa-facebook text-[#DE2225] text-sm md:text-base group-hover/icon:text-white transition-colors duration-300"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Hover Effect - Additional Info */}
            <div className="absolute top-4 left-4 bg-[#0D5094] text-white px-3 py-1 rounded-full text-xs md:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Available for Consultation
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
