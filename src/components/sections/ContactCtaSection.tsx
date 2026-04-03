import { company } from '../../data/company';
import { Button } from '../ui/Button';
import { PageContainer } from '../layout/PageContainer';

export function ContactCtaSection() {
  return (
    <section className="py-14 sm:py-16">
      <PageContainer>
        <div className="powell-panel-warm rounded-[2rem] p-8 lg:p-10">
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-300">Call Powell’s</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">Need excavation help, gravel delivered, a drainfield answer, or a storage unit?</h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-stone-300">
                {company.primaryCta}
              </p>
            </div>
            <div className="grid gap-4">
              <Button href={company.phoneHref} className="w-full">
                Call {company.phoneDisplay}
              </Button>
              <Button href={`mailto:${company.email}`} variant="secondary" className="w-full break-all">
                Email {company.email}
              </Button>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
