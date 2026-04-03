import { company } from '../../data/company';
import { Button } from '../ui/Button';

export function ContactInfoSection() {
  return (
    <section className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
      <div className="powell-panel-warm rounded-[2rem] p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-300">Contact</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">Call, email, or stop in with the details that help the office answer faster</h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-stone-300">
          Powell’s is easiest to use when the next step is obvious: call with the job, the material, the storage need, or the property question and let the office point you in the right direction.
        </p>
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
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm leading-7 text-stone-300">
          <div className="font-semibold text-white">When you call</div>
          <ul className="mt-3 space-y-2">
            {company.contactGuidance.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="powell-panel rounded-[2rem] p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-300">Hours & inquiry types</p>
        <div className="mt-5 space-y-2 text-sm text-stone-300">
          {company.hours.map((hour) => (
            <div key={hour}>{hour}</div>
          ))}
        </div>
        <div className="mt-6 grid gap-3 text-sm leading-7 text-stone-300">
          <div className="rounded-2xl border border-white/10 bg-stone-900/70 p-4">
            <span className="font-semibold text-white">Service work:</span> excavation, septic and drainfield support, driveways, grading, ponds, and general property-work questions.
          </div>
          <div className="rounded-2xl border border-white/10 bg-stone-900/70 p-4">
            <span className="font-semibold text-white">Delivered materials:</span> road gravel, topsoil, sand, stone, mulch, crushed concrete, and millings.
          </div>
          <div className="rounded-2xl border border-white/10 bg-stone-900/70 p-4">
            <span className="font-semibold text-white">Storage and land:</span> unit sizes, pricing, availability, and general property questions.
          </div>
        </div>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button href={company.phoneHref}>Call {company.phoneDisplay}</Button>
          <Button href={`mailto:${company.email}`} variant="secondary">Email Powell’s</Button>
        </div>
      </div>
    </section>
  );
}
