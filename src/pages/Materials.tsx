import { PageContainer } from "../components/layout/PageContainer";
import { DeliveryCtaSection } from "../components/sections/DeliveryCtaSection";
import { MaterialsGridSection } from "../components/sections/MaterialsGridSection";
import { materialsData } from "../data/materials";

export function Materials() {
  return (
    <>
      <section className="py-12">
        <PageContainer>
          <h1 className="text-3xl font-bold text-slate-900">Materials</h1>
          <p className="mt-3 max-w-3xl text-slate-700">{materialsData.intro}</p>
        </PageContainer>
      </section>
      <MaterialsGridSection />
      <DeliveryCtaSection />
    </>
  );
}
