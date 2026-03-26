import { company } from '../../data/company';
import { Button } from '../ui/Button';

export function ContactInfoSection() {
  return (
    <section className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
      <div className="rounded-[2rem] border border-white/10 bg-stone-900/70 p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-300">Contact</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">Make the next step obvious and easy to act on</h1>
        <div className="mt-6 space-y-4 text-sm text-stone-200">
          <div>
            <div className="text-stone-400">Phone</div>
            <a href={company.phoneHref} className="text-lg font-semibold text-white hover:text-amber-300">
              {company.phoneDisplay}
            </a>
          </div>
          <div>
            <div className="text-stone-400">Email</div>
            <a href={`mailto:${company.email}`} className="text-lg font-semibold text-white hover:text-amber-300">
              {company.email}
            </a>
          </div>
          <div>
            <div className="text-stone-400">Address</div>
            <div className="text-lg font-semibold text-white">{company.addressLine1}</div>
            <div>{company.cityStateZip}</div>
          </div>
        </div>
      </div>
      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-300">Hours & next step</p>
        <div className="mt-5 space-y-2 text-sm text-stone-300">
          {company.hours.map((hour) => (
            <div key={hour}>{hour}</div>
          ))}
        </div>
        <p className="mt-6 text-sm leading-7 text-stone-300">
          This contact structure is ready for a real form or quote workflow later, but the demo keeps the first path simple: call or email.
        </p>
        <div className="mt-6">
          <Button href={company.phoneHref}>Call {company.phoneDisplay}</Button>
        </div>
      </div>
    </section>
  );
}
