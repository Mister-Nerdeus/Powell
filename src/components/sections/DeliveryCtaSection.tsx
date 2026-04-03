import { company } from '../../data/company';
import { Button } from '../ui/Button';

export function DeliveryCtaSection() {
  return (
    <div className="powell-panel-warm rounded-[2rem] p-8">
      <h3 className="text-2xl font-semibold text-white">Call for delivery, quantity, and the right material for the job</h3>
      <p className="mt-3 max-w-2xl text-sm leading-7 text-stone-300">
        Powell’s keeps materials ordering practical. Call with the material you need, where it is going, and any rough quantity you already know so the office can point you in the right direction faster.
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
