import {
     // Exalna Export
     ExalnaProject,
     ExalnaProject1,
     ExalnaProject2,
     ExalnaProject3,
     ExalnaProject4,
     // Warnet Export
     WarnetProject,
     WarnetProject1,
     WarnetProject2,
     WarnetProject3,
     // Stickchain Export
     StickchainProject,
     StickchainProject1,
     StickchainProject2,
     StickchainProject3,
     StickchainProject4,
     StickchainProject5,
     // Restaurant Export
     RestaurantProject,
     RestaurantProject1,
     RestaurantProject2,
     RestaurantProject3,
     RestaurantProject4,
     RestaurantProject5,
     RestaurantProject6,
     // Pringastula Export
     PringastulaProject,
     PringastulaProject1,
     PringastulaProject2,
     PringastulaProject3,
     // Sampahcerdas Export
     SampahcerdasProject,
     SampahcerdasProject1,
     SampahcerdasProject2,
     SampahcerdasProject3,
     SampahcerdasProject4,
} from "./images"

export type Project = {
     id: number
     name: string
     description: string
     img: string[]
     challenge: string
     solution: string
     role: string
     duration: string
     year: string
     client: string
     techStack: string[]
     category: string[]
}

export const ProjectItem: Project[] = [
     {
          id: 1,
          name: "Exalna Platform",
          description:
               "Built an AI-powered platform to streamline supplier discovery and simplify cross-border trade processes.",
          challenge:
               "Suppliers were hard to discover and cross-border trade processes were slow, manual, and error-prone, making it difficult for businesses to scale sourcing efficiently.",
          solution:
               "Built an AI-powered platform that automates supplier matching and streamlines document handling, cutting process time significantly and giving businesses a clearer view of trusted suppliers.",
          role: "Full-stack Developer",
          duration: "3 Months",
          year: "2026",
          client: "Exalna",
          techStack: ["React", "TypeScript", "Node.js", "PostgreSQL", "OpenAI API", "Tailwind CSS"],
          img: [ExalnaProject, ExalnaProject1, ExalnaProject2, ExalnaProject3, ExalnaProject4],
          category: ["AI Wrapper"],
     },
     {
          id: 2,
          name: "Warnet Management System",
          description:
               "Developed a comprehensive management system for warnet operations, including user authentication, game management, and billing.",
          challenge:
               "Warnet owners relied on manual bookkeeping to track billing, session time, and customer usage, causing frequent calculation errors and difficulty monitoring multiple PC units at once.",
          solution:
               "Built a management system with real-time session tracking, automated billing, and a monitoring dashboard so owners can oversee every unit and transaction from a single interface.",
          role: "Frontend Developer",
          duration: "2 Months",
          year: "2025",
          client: "Local Warnet Business",
          techStack: ["React", "TypeScript", "Tailwind CSS", "Node.js", "MySQL", "Google Maps API"],
          img: [WarnetProject, WarnetProject1, WarnetProject2, WarnetProject3],
          category: ["Font-End", "Bill Management", "Monitoring", "Maps"],
     },
     {
          id: 3,
          name: "Stickchain Game Platform",
          description:
               "Built a blockchain-based game platform with secure authentication and integrated crypto payment system.",
          challenge:
               "Players needed a trustworthy way to own and trade in-game assets, while the platform required secure authentication and a payment flow that could handle crypto transactions reliably.",
          solution:
               "Developed a game platform integrated with blockchain-based asset ownership, secure wallet authentication, and a streamlined crypto payment system for smooth in-game transactions.",
          role: "Full-stack Developer",
          duration: "4 Months",
          year: "2025",
          client: "Stickchain",
          techStack: ["React", "TypeScript", "Solidity", "Ethers.js", "Node.js", "MongoDB"],
          img: [
               StickchainProject,
               StickchainProject1,
               StickchainProject2,
               StickchainProject3,
               StickchainProject4,
               StickchainProject5,
          ],
          category: ["Authentication", "Blockchain", "Payment"],
     },
     {
          id: 4,
          name: "Pringastula Company Profile",
          description:
               "A modern company profile website for Pringastula, showcasing their services and achievements.",
          challenge:
               "Pringastula needed a professional online presence that clearly communicated their services and credibility to potential clients, replacing an outdated static site.",
          solution:
               "Designed and built a modern, responsive company profile website with clear service sections, achievement highlights, and fast load times to leave a strong first impression.",
          role: "Frontend Developer",
          duration: "3 Weeks",
          year: "2025",
          client: "Pringastula",
          techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
          img: [PringastulaProject, PringastulaProject1, PringastulaProject2, PringastulaProject3],
          category: ["Company Profile"],
     },
     {
          id: 5,
          name: "Restaurant Management System",
          description:
               "A modern restaurant management system for efficient operations and customer service.",
          challenge:
               "The restaurant struggled with manual order tracking, an unorganized menu, and slow checkout process, leading to longer wait times and occasional order mistakes.",
          solution:
               "Built a management system covering digital menu handling, secure staff authentication, order processing with an integrated cart, and payment handling to speed up service and reduce errors.",
          role: "Full-stack Developer",
          duration: "2.5 Months",
          year: "2025",
          client: "Local Restaurant Business",
          techStack: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Tailwind CSS"],
          img: [
               RestaurantProject,
               RestaurantProject1,
               RestaurantProject2,
               RestaurantProject3,
               RestaurantProject4,
               RestaurantProject5,
               RestaurantProject6,
          ],
          category: ["Management Food Menu", "Authentication", "Payment Order", "Cart"],
     },
     {
          id: 6,
          name: "Sampah Cerdas System",
          description:
               "Smart waste tracking system for efficient trash collection management. Drivers manage routes & pickups while users monitor bin status in real-time.",
          challenge:
               "Waste collection routes were planned manually without real-time visibility into bin status, causing inefficient pickups and residents unaware of when collection would occur.",
          solution:
               "Developed a smart tracking system with live maps for drivers to manage routes and pickups efficiently, while residents can monitor bin status and collection schedules in real-time.",
          role: "Full-stack Developer",
          duration: "3 Months",
          year: "2026",
          client: "Sampah Cerdas",
          techStack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Google Maps API", "Socket.io"],
          img: [SampahcerdasProject, SampahcerdasProject1, SampahcerdasProject2, SampahcerdasProject3, SampahcerdasProject4],
          category: ["Maps", "Management System", "Tracking"],
     },
]