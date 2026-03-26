import { materialsData } from "../../data/materials";
import { PageContainer } from "../layout/PageContainer";
import { SectionHeading } from "../ui/SectionHeading";

export function MaterialsGridSection() {
  return (
    <section className="py-8">
      <PageContainer>
        <SectionHeading title="Available Materials" description="Materials listed below are delivered by request." />
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {materialsData.items.map((item) => (
            <li
              key={item}
              className="rounded-md bg-white px-4 py-3 text-sm font-medium text-slate-800 shadow-sm ring-1 ring-slate-200"
            >
              {item}
            </li>
          ))}
        </ul>
      </PageContainer>
    </section>
  );
}
