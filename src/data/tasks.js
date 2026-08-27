export const routes = [
  {
    id: "R1",
    code: "NCL",
    name: "North Campus Loop",
    status: "Running",
    frequency: "10 min",
    description: "Library, engineering block, hostels and north gate.",
    stops: [
      { id: "S1", name: "Main Gate", zone: "North", eta: 2, facilities: ["Shelter", "CCTV"] },
      { id: "S2", name: "Engineering Block", zone: "North", eta: 6, facilities: ["Shelter", "Wi-Fi"] },
      { id: "S3", name: "Central Library", zone: "Central", eta: 11, facilities: ["Shelter", "Seating"] },
      { id: "S4", name: "North Hostel", zone: "North", eta: 17, facilities: ["Shelter"] },
      { id: "S5", name: "Sports Complex", zone: "West", eta: 24, facilities: ["Lighting", "CCTV"] }
    ]
  },
  {
    id: "R2",
    code: "SCE",
    name: "South Campus Express",
    status: "Running",
    frequency: "15 min",
    description: "Fast service between south gate, academic blocks and food court.",
    stops: [
      { id: "S6", name: "South Gate", zone: "South", eta: 4, facilities: ["Shelter", "CCTV"] },
      { id: "S7", name: "Science Block", zone: "South", eta: 9, facilities: ["Seating"] },
      { id: "S8", name: "Food Court", zone: "Central", eta: 14, facilities: ["Shelter", "Seating"] },
      { id: "S9", name: "Admin Block", zone: "Central", eta: 20, facilities: ["Shelter"] }
    ]
  },
  {
    id: "R3",
    code: "HC",
    name: "Hostel Connector",
    status: "Delayed",
    frequency: "12 min",
    description: "Connects residential hostels with the academic core.",
    stops: [
      { id: "S10", name: "East Hostel", zone: "East", eta: 5, facilities: ["Shelter"] },
      { id: "S11", name: "West Hostel", zone: "West", eta: 10, facilities: ["Shelter", "CCTV"] },
      { id: "S12", name: "Student Centre", zone: "Central", eta: 18, facilities: ["Wi-Fi", "Seating"] },
      { id: "S13", name: "Main Gate", zone: "North", eta: 26, facilities: ["Shelter", "CCTV"] }
    ]
  },
  {
    id: "R4",
    code: "WS",
    name: "Weekend Shuttle",
    status: "Limited",
    frequency: "20 min",
    description: "Weekend shuttle serving sports and residential areas.",
    stops: [
      { id: "S14", name: "Main Gate", zone: "North", eta: 7, facilities: ["Shelter"] },
      { id: "S15", name: "Sports Complex", zone: "West", eta: 15, facilities: ["Lighting"] },
      { id: "S16", name: "Student Centre", zone: "Central", eta: 23, facilities: ["Seating"] }
    ]
  }
];

export const buses = [
  { id: "BUS-101", routeId: "R1", driver: "A. Kumar", location: "Engineering Block", nextStop: "Central Library", eta: 5, occupancy: 62, status: "On Time" },
  { id: "BUS-204", routeId: "R2", driver: "S. Ravi", location: "South Gate", nextStop: "Science Block", eta: 4, occupancy: 48, status: "On Time" },
  { id: "BUS-305", routeId: "R3", driver: "M. Arun", location: "West Hostel", nextStop: "Student Centre", eta: 9, occupancy: 84, status: "Delayed" },
  { id: "BUS-410", routeId: "R4", driver: "P. Vijay", location: "Depot", nextStop: "Main Gate", eta: 15, occupancy: 31, status: "Limited Service" }
];