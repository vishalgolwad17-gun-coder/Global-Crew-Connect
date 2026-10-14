import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Globe2,
  UserRound,
  BriefcaseBusiness,
  ShieldCheck,
  Mail,
  Clock3,
  FileCheck2,
  RotateCcw,
  CircleAlert,
} from "lucide-react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/firebase";

const initialForm = {
  fullName: "",
  phone: "",
  email: "",
  location: "",
  destination: "Europe",
  jobRole: "",
  experience: "1–3 years",
  passportStatus: "Available",
  skills: "",
};

const inputClass =
  "block w-full min-w-0 rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-[#08142c] placeholder:text-slate-400 outline-none transition duration-200 hover:border-slate-300 focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10";

const labelClass =
  "mb-2 block text-sm font-semibold leading-5 text-slate-700";

function FormField({ label, id, children, className = "" }) {
  return (
    <div className={`min-w-0 ${className}`}>
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      {children}
    </div>
  );
}

function BrandMark({ small = false }) {
  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-2xl border border-amber-300/20 bg-amber-400/10 text-amber-300 ${
        small ? "h-11 w-11" : "h-14 w-14"
      }`}
    >
      <Globe2 size={small ? 22 : 27} strokeWidth={1.8} />
    </div>
  );
}

export default function CandidateRegistrationForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submission, setSubmission] = useState(null);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
    if (status) setStatus("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setStatus("");

    const submittedEmail = form.email.trim().toLowerCase();
    const submittedName = form.fullName.trim();

    try {
      const documentRef = await addDoc(collection(db, "candidates"), {
        fullName: submittedName,
        phone: form.phone.trim(),
        email: submittedEmail,
        location: form.location.trim(),
        destination: form.destination,
        jobRole: form.jobRole.trim(),
        experience: form.experience,
        passportStatus: form.passportStatus,
        skills: form.skills.trim(),
        status: "New",
        createdAt: serverTimestamp(),
      });

      setSubmission({
        id: documentRef.id,
        name: submittedName,
        email: submittedEmail,
        destination: form.destination,
      });
      setForm({ ...initialForm });
      setStatus("success");
    } catch (error) {
      console.error("Candidate registration failed:", error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNewApplication = () => {
    setSubmission(null);
    setStatus("");
    setForm({ ...initialForm });
  };

  if (status === "success" && submission) {
    return (
      <section
        id="candidate-registration"
        aria-labelledby="submission-success-title"
        className="w-full min-w-0"
      >
        <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-900/10 sm:rounded-3xl">
          <div className="relative isolate overflow-hidden bg-[#08142c] px-5 py-7 text-white sm:px-8 sm:py-9 lg:px-12 lg:py-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-12 -top-20 -z-10 h-56 w-56 rounded-full bg-amber-400/10 blur-3xl sm:h-72 sm:w-72"
            />
            <div className="flex items-center gap-3 sm:gap-4">
              <BrandMark />
              <div className="min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-300 sm:text-xs">
                  Global Crew Connect
                </p>
                <p className="mt-1 text-sm text-slate-300 sm:text-base">
                  Connecting Talent. Connecting the World.
                </p>
              </div>
            </div>
          </div>

          <div className="px-5 py-9 sm:px-9 sm:py-12 lg:px-12">
            <div className="mx-auto max-w-2xl text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 ring-8 ring-emerald-50/60 sm:h-24 sm:w-24">
                <CheckCircle2
                  size={48}
                  strokeWidth={1.7}
                  className="text-emerald-600 sm:h-14 sm:w-14"
                />
              </div>

              <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-amber-700">
                Submission complete
              </p>
              <h2
                id="submission-success-title"
                className="mt-3 text-3xl font-bold leading-tight tracking-tight text-[#08142c] sm:text-4xl"
              >
                Thank you, {submission.name.split(" ")[0]}!
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                Your candidate profile has been submitted successfully. Our team
                will review your information and contact you if a relevant
                opportunity matches your profile.
              </p>
            </div>

            <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Submission reference
                  </p>
                  <p className="mt-1 break-all font-mono text-base font-bold text-[#08142c] sm:text-lg">
                    GCC-{submission.id.slice(0, 8).toUpperCase()}
                  </p>
                </div>
                <span className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  Received
                </span>
              </div>
              <div className="mt-5 grid grid-cols-1 gap-3 border-t border-slate-200 pt-5 sm:grid-cols-2">
                <div className="flex min-w-0 items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-slate-500 shadow-sm ring-1 ring-slate-200">
                    <Mail size={17} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs text-slate-500">Registered email</p>
                    <p className="mt-1 break-all text-sm font-semibold text-[#08142c]">
                      {submission.email}
                    </p>
                  </div>
                </div>
                <div className="flex min-w-0 items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-slate-500 shadow-sm ring-1 ring-slate-200">
                    <Globe2 size={17} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs text-slate-500">Preferred destination</p>
                    <p className="mt-1 text-sm font-semibold text-[#08142c]">
                      {submission.destination}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mx-auto mt-8 max-w-2xl">
              <h3 className="text-base font-bold text-[#08142c] sm:text-lg">
                What happens next?
              </h3>
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                <div className="rounded-xl border border-slate-200 p-4">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-50 text-amber-700">
                    <FileCheck2 size={19} />
                  </span>
                  <p className="mt-3 text-sm font-semibold text-[#08142c]">
                    Profile review
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Our team reviews your submitted details.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200 p-4">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-50 text-amber-700">
                    <UserRound size={19} />
                  </span>
                  <p className="mt-3 text-sm font-semibold text-[#08142c]">
                    Opportunity matching
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    We consider your skills and preferences.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200 p-4">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-50 text-amber-700">
                    <Clock3 size={19} />
                  </span>
                  <p className="mt-3 text-sm font-semibold text-[#08142c]">
                    Follow-up
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    We may contact you when a suitable role is available.
                  </p>
                </div>
              </div>
            </div>

            <div className="mx-auto mt-8 flex max-w-2xl flex-col gap-3 border-t border-slate-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs leading-6 text-slate-500">
                Need help? Contact{" "}
                <a
                  href="mailto:info@globalcrewconnect.org"
                  className="font-semibold text-amber-700 underline underline-offset-2 hover:text-amber-900"
                >
                  info@globalcrewconnect.org
                </a>
              </p>
              <button
                type="button"
                onClick={handleNewApplication}
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#08142c] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#102447] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-amber-400/40 sm:w-auto"
              >
                <RotateCcw size={16} />
                Submit another application
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="candidate-registration"
      aria-labelledby="candidate-form-title"
      className="w-full min-w-0"
    >
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-900/5 sm:rounded-3xl">
        {/* Form header */}
        <div className="relative isolate overflow-hidden bg-[#08142c] px-5 py-7 text-white sm:px-8 sm:py-9 lg:px-10 lg:py-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-12 -top-20 -z-10 h-56 w-56 rounded-full bg-yellow-400/10 blur-3xl sm:h-72 sm:w-72"
          />
          <div className="flex items-start gap-3 sm:gap-4">
            <BrandMark />
            <div className="min-w-0 flex-1">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-yellow-300 sm:text-xs sm:tracking-[0.22em]">
                Global Crew Connect
              </p>
              <h2
                id="candidate-form-title"
                className="mt-2 text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-4xl"
              >
                Start Your Overseas Career
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
                Tell us about your experience and career goals. Our team can
                contact you regarding relevant international employment
                opportunities.
              </p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/10 pt-5 text-xs text-slate-300 sm:text-sm">
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 size={15} className="text-yellow-300" />
              Simple registration
            </span>
            <span className="inline-flex items-center gap-2">
              <Globe2 size={15} className="text-yellow-300" />
              Europe &amp; Gulf
            </span>
          </div>
        </div>

        {/* Form body */}
        <form
          onSubmit={handleSubmit}
          className="min-w-0 space-y-7 p-5 sm:space-y-9 sm:p-8 lg:p-10"
        >
          {/* Personal information */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
                <UserRound size={20} />
              </span>
              <div>
                <h3 className="text-base font-bold text-[#08142c] sm:text-lg">
                  Personal Information
                </h3>
                <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">
                  Enter your contact details.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-x-5 gap-y-5 sm:grid-cols-2 sm:gap-y-6">
              <FormField label="Full name *" id="candidate-name">
                <input
                  id="candidate-name"
                  className={inputClass}
                  name="fullName"
                  type="text"
                  value={form.fullName}
                  onChange={updateField}
                  placeholder="Enter your full name"
                  autoComplete="name"
                  maxLength={100}
                  required
                />
              </FormField>
              <FormField label="Phone number *" id="candidate-phone">
                <input
                  id="candidate-phone"
                  className={inputClass}
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={updateField}
                  placeholder="+91 XXXXX XXXXX"
                  autoComplete="tel"
                  maxLength={25}
                  required
                />
              </FormField>
              <FormField label="Email address *" id="candidate-email">
                <input
                  id="candidate-email"
                  className={inputClass}
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={updateField}
                  placeholder="you@example.com"
                  autoComplete="email"
                  maxLength={254}
                  required
                />
              </FormField>
              <FormField label="Current location *" id="candidate-location">
                <input
                  id="candidate-location"
                  className={inputClass}
                  name="location"
                  type="text"
                  value={form.location}
                  onChange={updateField}
                  placeholder="City, country"
                  autoComplete="address-level2"
                  maxLength={150}
                  required
                />
              </FormField>
            </div>
          </div>

          <div className="h-px bg-slate-100" />

          {/* Career preferences */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
                <BriefcaseBusiness size={20} />
              </span>
              <div>
                <h3 className="text-base font-bold text-[#08142c] sm:text-lg">
                  Career Preferences
                </h3>
                <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">
                  Tell us what kind of opportunity you are seeking.
                </p>
              </div>
            </div>

            <fieldset>
              <legend className={labelClass}>Preferred destination *</legend>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {[
                  {
                    value: "Europe",
                    description: "Explore European opportunities",
                  },
                  {
                    value: "Gulf countries",
                    description: "Explore Gulf opportunities",
                  },
                  {
                    value: "Open to both",
                    description: "Consider both regions",
                  },
                ].map((item) => {
                  const selected = form.destination === item.value;
                  return (
                    <label
                      key={item.value}
                      className={`flex min-w-0 cursor-pointer items-start gap-3 rounded-xl border p-4 transition duration-200 ${
                        selected
                          ? "border-amber-400 bg-amber-50/70 ring-1 ring-amber-400/20"
                          : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
                      }`}
                    >
                      <input
                        type="radio"
                        name="destination"
                        value={item.value}
                        checked={selected}
                        onChange={updateField}
                        className="mt-1 h-4 w-4 shrink-0 accent-amber-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
                      />
                      <span className="min-w-0">
                        <span className="block text-sm font-semibold leading-5 text-[#08142c]">
                          {item.value}
                        </span>
                        <span className="mt-1 block text-xs leading-5 text-slate-500">
                          {item.description}
                        </span>
                      </span>
                    </label>
                  );
                })}
              </div>
            </fieldset>

            <div className="mt-5 grid grid-cols-1 gap-x-5 gap-y-5 sm:grid-cols-2 sm:gap-y-6">
              <FormField label="Interested job role *" id="candidate-role">
                <input
                  id="candidate-role"
                  className={inputClass}
                  name="jobRole"
                  type="text"
                  value={form.jobRole}
                  onChange={updateField}
                  placeholder="e.g. Chef, Electrician, Welder"
                  maxLength={150}
                  required
                />
              </FormField>
              <FormField label="Work experience *" id="candidate-experience">
                <select
                  id="candidate-experience"
                  className={`${inputClass} cursor-pointer`}
                  name="experience"
                  value={form.experience}
                  onChange={updateField}
                  required
                >
                  <option value="Fresher">Fresher</option>
                  <option value="Less than 1 year">Less than 1 year</option>
                  <option value="1–3 years">1–3 years</option>
                  <option value="3–5 years">3–5 years</option>
                  <option value="5+ years">5+ years</option>
                </select>
              </FormField>
              <FormField
                label="Passport status *"
                id="candidate-passport"
                className="sm:col-span-2"
              >
                <select
                  id="candidate-passport"
                  className={`${inputClass} cursor-pointer`}
                  name="passportStatus"
                  value={form.passportStatus}
                  onChange={updateField}
                  required
                >
                  <option value="Available">Passport available</option>
                  <option value="Applied">Passport applied for</option>
                  <option value="Not available">Passport not available</option>
                </select>
              </FormField>
              <FormField
                label="Skills and qualifications *"
                id="candidate-skills"
                className="sm:col-span-2"
              >
                <textarea
                  id="candidate-skills"
                  className={`${inputClass} min-h-32 resize-y leading-6`}
                  name="skills"
                  value={form.skills}
                  onChange={updateField}
                  placeholder="Describe your skills, qualifications, certifications and relevant work experience..."
                  minLength={10}
                  maxLength={2000}
                  rows={5}
                  required
                />
                <div className="mt-2 flex justify-between gap-3 text-xs text-slate-400">
                  <span>Minimum 10 characters</span>
                  <span className="shrink-0 tabular-nums">
                    {form.skills.length}/2000
                  </span>
                </div>
              </FormField>
            </div>
          </div>

          {/* Consent and submit */}
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
            <div className="flex items-start gap-3">
              <ShieldCheck
                size={19}
                className="mt-0.5 shrink-0 text-amber-700"
              />
              <p className="text-xs leading-6 text-slate-600 sm:text-sm">
                By submitting this form, you confirm that the information
                provided is accurate and agree to be contacted about relevant
                employment opportunities.
              </p>
            </div>
          </div>

          {status === "error" && (
            <div
              role="alert"
              className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm leading-6 text-red-800"
            >
              <CircleAlert size={20} className="mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold">We couldn't submit your application.</p>
                <p className="mt-1 text-red-700">
                  Please check your connection and try again. If the problem
                  continues, contact info@globalcrewconnect.org.
                </p>
              </div>
            </div>
          )}

          <div className="flex flex-col gap-4 border-t border-slate-100 pt-6 sm:pt-7">
            <button
              type="submit"
              disabled={isSubmitting}
              className="group inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-xl bg-[#08142c] px-6 py-4 text-sm font-bold text-white shadow-md shadow-slate-900/10 transition duration-200 hover:bg-[#102447] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-amber-400/40 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60 sm:w-fit sm:min-w-64"
            >
              {isSubmitting ? "Submitting your profile..." : "Submit Candidate Profile"}
              {!isSubmitting && (
                <ArrowRight
                  size={18}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              )}
            </button>

            <p className="text-xs leading-6 text-slate-500">
              Prefer email?{" "}
              <a
                href="mailto:info@globalcrewconnect.org"
                className="break-all font-semibold text-amber-700 underline underline-offset-2 hover:text-amber-900"
              >
                info@globalcrewconnect.org
              </a>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
