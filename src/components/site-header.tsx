// "use client"

// import { Button } from "@/src/components/ui/button"
// import { Menu, Shield } from 'lucide-react'
// import { useState } from "react"

// export default function Header() {
//   const [open, setOpen] = useState(false)

//   return (
//     <header className="relative z-20">
//       <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 md:px-6">
//         <a href="#" className="flex items-center gap-2">
//           <Shield className="h-5 w-5 text-purple-500" aria-hidden="true" />
//           <span className="text-xl font-semibold tracking-tight">Guardz</span>
//           <span className="sr-only">Home</span>
//         </a>
//         <nav className="hidden items-center gap-8 text-sm md:flex">
//           <a href="#" className="text-foreground/80 hover:text-foreground">Platform</a>
//           <a href="#" className="text-foreground/80 hover:text-foreground">Solutions</a>
//           <a href="#" className="text-foreground/80 hover:text-foreground">Partners</a>
//           <a href="#" className="text-foreground/80 hover:text-foreground">Resources</a>
//           <a href="#" className="text-foreground/80 hover:text-foreground">Pricing</a>
//         </nav>
//         <div className="hidden items-center gap-2 md:flex">
//           <Button variant="ghost">Log in</Button>
//           <Button>Book a demo</Button>
//         </div>
//         <button
//           className="inline-flex items-center rounded-md border px-3 py-2 md:hidden"
//           onClick={() => setOpen((s) => !s)}
//           aria-expanded={open}
//           aria-controls="mobile-menu"
//         >
//           <Menu className="h-5 w-5" />
//           <span className="sr-only">Toggle menu</span>
//         </button>
//       </div>

//       {/* Mobile menu */}
//       {open && (
//         <div id="mobile-menu" className="mx-4 rounded-lg border bg-white/70 backdrop-blur md:hidden">
//           <div className="flex flex-col p-3 text-sm">
//             <a className="rounded-md px-3 py-2 hover:bg-muted" href="#">Platform</a>
//             <a className="rounded-md px-3 py-2 hover:bg-muted" href="#">Solutions</a>
//             <a className="rounded-md px-3 py-2 hover:bg-muted" href="#">Partners</a>
//             <a className="rounded-md px-3 py-2 hover:bg-muted" href="#">Resources</a>
//             <a className="rounded-md px-3 py-2 hover:bg-muted" href="#">Pricing</a>
//             <div className="mt-2 grid grid-cols-2 gap-2">
//               <Button variant="outline">Log in</Button>
//               <Button>Book a demo</Button>
//             </div>
//           </div>
//         </div>
//       )}
//     </header>
//   )
// }
