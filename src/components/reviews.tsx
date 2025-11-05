import { Card, CardContent } from "@/src/components/ui/card";
import { Avatar, AvatarFallback } from "@/src/components/ui/avatar";
import { Quote } from "lucide-react";

export default function Reviews() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 relative mt-24" >
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-gradient-to-br from-purple-50 to-white">
          <CardContent className="p-6">
            <div className="mb-4">
              <h3 className="text-lg font-semibold">
                Reviews from our Partners
              </h3>
            </div>
            <figure className="space-y-4">
              <Quote className="h-6 w-6 text-purple-600" aria-hidden="true" />
              <blockquote className="text-sm text-muted-foreground">
                In our multi‑tenant architecture, we can address incidents
                faster without drowning in alert storms. The ability to tie AI
                to reduce false positives and alert us to serious issues meant
                rapid investigation and remediation.
              </blockquote>
              <figcaption className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback>RP</AvatarFallback>
                </Avatar>
                <div>
                  <div className="text-sm font-medium">Ryan P.</div>
                  <div className="text-xs text-muted-foreground">
                    MSP, Security Director
                  </div>
                </div>
              </figcaption>
            </figure>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h3 className="mb-2 text-lg font-semibold">
              Why MSPs choose Guardz
            </h3>
            <ul className="list-inside list-disc text-sm text-muted-foreground">
              <li>Unified visibility across tenants and tools</li>
              <li>Lower noise with context‑rich prioritization</li>
              <li>Built‑in automation and opinionated runbooks</li>
              <li>Scale revenue with standardized security offerings</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
