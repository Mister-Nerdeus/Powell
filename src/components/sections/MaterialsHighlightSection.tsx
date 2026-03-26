import { materialsData } from "../../data/materials";
import { PageContainer } from "../layout/PageContainer";
import { SectionHeading } from "../ui/SectionHeading";

export function MaterialsHighlightSection() {
  return (
    <section className="py-12">
      <PageContainer>
        <SectionHeading title="Materials Delivery" description={materialsData.intro} />
        <div className="flex flex-wrap gap-2">
          {materialsData.items.slice(0, 6).map((item) => (
            <span key={item} className="rounded-full bg-slate-900 px-3 py-2 text-sm font-medium text-white">
              {item}
            </span>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
