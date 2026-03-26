import { company } from '../../data/company';
import { Button } from '../ui/Button';

export function ServicesPageCtaSection() {
  return (
    <div className="rounded-[2rem] border border-amber-400/20 bg-amber-400/10 p-8">
      <h3 className="text-2xl font-semibold text-white">Need help figuring out which service fits your project?</h3>
      <p className="mt-3 max-w-2xl text-sm leading-7 text-stone-300">
        This demo keeps the service page simple and call-oriented so homeowners and property owners can move from “What do they do?” to “Let’s talk.”
      </p>
      <div className="mt-5">
        <Button href={company.phoneHref}>Call {company.phoneDisplay}</Button>
      </div>
    </div>
  );
}
