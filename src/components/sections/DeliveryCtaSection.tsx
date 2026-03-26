import { company } from '../../data/company';
import { Button } from '../ui/Button';

export function DeliveryCtaSection() {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
      <h3 className="text-2xl font-semibold text-white">Call for delivery, availability, and project fit</h3>
      <p className="mt-3 max-w-2xl text-sm leading-7 text-stone-300">
        Powell’s keeps materials ordering simple. Call with the material you need, where it is going, and any rough quantity you already know.
      </p>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <Button href={company.phoneHref}>Call {company.phoneDisplay}</Button>
        <Button href={`mailto:${company.email}`} variant="secondary">
          Email Powell’s
        </Button>
      </div>
    </div>
  );
}
