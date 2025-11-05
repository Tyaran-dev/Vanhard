import Image from "next/image";
import { Card, CardContent } from "@/src/components/ui/card";

const people = [
  {
    name: "Alex Carter",
    role: "Owner, Carter IT",
    quote:
      "Guardz gave us instant visibility across our stack. We close tickets faster and show value to clients.",
  },
  {
    name: "Priya Singh",
    role: "COO, Vertex MSP",
    quote:
      "The opinionated automation is a game changer. New techs can respond confidently with the playbooks.",
  },
  {
    name: "Michael Ross",
    role: "Principal, Ross Networks",
    quote:
      "Noise dropped dramatically. Our team spends time on real issues rather than chasing alerts.",
  },
  {
    name: "Jamie Brooks",
    role: "CEO, Brooks Managed",
    quote:
      "Packaging security as a service with Guardz helped us grow MRR while improving outcomes.",
  },
];

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
      <h3 className="text-center text-lg font-semibold">
        What Our Clients Say About Us
      </h3>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {people.map((p, i) => (
          <Card key={i} className="overflow-hidden">
            <CardContent className="p-0">
              <Image
                src="/framed-headshot-thumbnail.png"
                alt={`${p.name} headshot`}
                width={400}
                height={180}
                className="h-44 w-full object-cover"
              />
              <div className="space-y-2 p-4">
                <p className="text-sm text-muted-foreground">{p.quote}</p>
                <div>
                  <div className="text-sm font-medium">{p.name}</div>
                  <div className="text-xs text-muted-foreground">{p.role}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
