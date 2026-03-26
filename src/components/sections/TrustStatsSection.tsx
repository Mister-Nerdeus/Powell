import { trustItems } from '../../data/trust';
import { PageContainer } from '../layout/PageContainer';
import { StatCard } from '../ui/StatCard';

export function TrustStatsSection() {
  return (
    <section className="py-14 sm:py-16">
      <PageContainer>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {trustItems.map((item) => (
            <StatCard key={item.label} value={item.value} label={item.label} />
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
