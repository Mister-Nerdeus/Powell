import { company } from '../../data/company';
import { Button } from '../ui/Button';
import { PageContainer } from '../layout/PageContainer';

export function ContactCtaSection() {
  return (
    <section className="py-14 sm:py-16">
      <PageContainer>
        <div className="rounded-[2rem] border border-amber-400/20 bg-gradient-to-br from-amber-500/10 via-stone-900 to-stone-950 p-8 shadow-soft lg:p-10">
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-300">Call to action</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">Need excavation, septic help, or delivered materials?</h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-stone-300">
                This demo keeps the next step simple: make it obvious how to call, ask about delivery, or start a quote conversation.
              </p>
            </div>
            <div className="grid gap-4">
              <Button href={company.phoneHref} className="w-full">
                Call {company.phoneDisplay}
              </Button>
              <Button href={`mailto:${company.email}`} variant="secondary" className="w-full break-all">
                {company.email}
              </Button>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
