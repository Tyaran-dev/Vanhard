import { Button } from "@/src/components/ui/button"

export default function CtaBanner() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
      <div className="relative overflow-hidden rounded-2xl border bg-white p-10">
        {/* subtle background accents */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-purple-500/15 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-indigo-500/15 blur-2xl" />

        <div className="relative z-10 grid items-center gap-6 md:grid-cols-[1fr_auto]">
          <div>
            <h3 className="text-center text-xl font-bold md:text-left">
              Get Free Cybersecurity for Your MSP Business
            </h3>
            <p className="mt-2 text-center text-muted-foreground md:text-left">
              Secure your own organization at no cost when you protect your clients with Guardz.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <Button size="lg">Start free</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
