import { companyData } from "../../data/company";
import { PageContainer } from "../layout/PageContainer";
import { SectionHeading } from "../ui/SectionHeading";

export function AboutIntroSection() {
  return (
    <section className="py-12">
      <PageContainer>
        <SectionHeading
          title={`About ${companyData.name}`}
          description="Powell's supports property owners with practical excavation, septic, and material delivery work across the local region."
        />
        <p className="max-w-3xl text-slate-700">
          We focus on realistic job planning, dependable communication, and clear next steps so your project can keep moving.
        </p>
      </PageContainer>
    </section>
  );
}
