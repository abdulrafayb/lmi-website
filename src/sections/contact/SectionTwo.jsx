import { useState } from "react";
import { useForm } from "react-hook-form";
import { ArrowRight, Envelope, MapPin, Phone } from "@phosphor-icons/react";
import Reveal from "../../components/Reveal";
import contactData from "../../../data/Contact Us.json";

const {
  eyebrow,
  heading,
  fields,
  services,
  submitLabel,
  note,
  validation,
  draftNotice,
  draftLinkLabel,
  emailSubject,
  contact,
  map,
} = contactData.sectionTwo;
const controlClass =
  "mt-2 w-full rounded-sm border border-trust-border bg-surface px-3 py-3 text-sm text-hero-heading outline-brand-red placeholder:text-hero-copy focus-visible:outline-2 focus-visible:outline-offset-2 aria-invalid:border-brand-red";

export default function SectionTwo() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [emailDraft, setEmailDraft] = useState(null);

  const prepareDraft = (values) => {
    const body = fields
      .map(({ name, label }) => `${label}: ${values[name] || "—"}`)
      .join("\n\n");
    setEmailDraft(
      `${contact.emailHref}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(body)}`,
    );
  };

  return (
    <section
      className="bg-surface py-12 text-center md:py-16 lg:py-20 lg:text-left"
      aria-labelledby="contact-quote-heading"
    >
      <div className="wrapper grid max-w-280 items-start gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        <Reveal className="border-trust-border min-w-0 rounded-xl border p-5 shadow-[0_0.5rem_1.5rem_var(--color-hero-shadow)] sm:p-7">
          <form
            id="quote-form"
            className="scroll-mt-28"
            onSubmit={handleSubmit(prepareDraft)}
            onChange={() => setEmailDraft(null)}
            noValidate
            aria-labelledby="contact-quote-heading"
            aria-describedby="quote-note"
          >
            <p className="text-brand-red mb-3 text-xs font-semibold tracking-[0.16em] uppercase">
              {eyebrow}
            </p>
            <h2
              id="contact-quote-heading"
              className="text-hero-heading text-2xl leading-snug font-bold tracking-tight"
            >
              {heading}
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {fields.map(
                ({
                  name,
                  label,
                  type,
                  placeholder,
                  required,
                  autoComplete,
                }) => {
                  const id = `quote-${name}`;
                  const rules = {
                    required: required ? validation.required : false,
                    ...(type === "email"
                      ? {
                          pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: validation.email,
                          },
                        }
                      : {}),
                    ...(type === "tel"
                      ? { minLength: { value: 7, message: validation.phone } }
                      : {}),
                    ...(required
                      ? {
                          validate: (value) =>
                            Boolean(value?.trim()) || validation.required,
                        }
                      : {}),
                  };
                  const props = {
                    id,
                    className: `${controlClass} text-center lg:text-left`,
                    required,
                    autoComplete,
                    "aria-invalid": errors[name] ? true : undefined,
                    "aria-describedby": errors[name]
                      ? `${id}-error`
                      : undefined,
                    ...register(name, rules),
                  };
                  return (
                    <div
                      key={name}
                      className={
                        type === "select" || type === "textarea"
                          ? "sm:col-span-2"
                          : "min-w-0"
                      }
                    >
                      <label
                        htmlFor={id}
                        className="text-hero-heading text-xs font-semibold"
                      >
                        {label}
                        {required && (
                          <span className="text-brand-red" aria-hidden="true">
                            {" "}
                            *
                          </span>
                        )}
                      </label>
                      {type === "select" ? (
                        <select {...props} defaultValue="">
                          <option value="" disabled>
                            {placeholder}
                          </option>
                          {services.map((service) => (
                            <option key={service} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                      ) : type === "textarea" ? (
                        <textarea
                          {...props}
                          placeholder={placeholder}
                          rows={4}
                          className={`${props.className} min-h-28 resize-y`}
                        />
                      ) : (
                        <input
                          {...props}
                          type={type}
                          placeholder={placeholder}
                        />
                      )}
                      {errors[name] && (
                        <p
                          id={`${id}-error`}
                          className="text-brand-red mt-1 text-xs"
                          role="alert"
                        >
                          {errors[name].message}
                        </p>
                      )}
                    </div>
                  );
                },
              )}
            </div>
            <button
              type="submit"
              className="border-brand-red bg-brand-red text-surface outline-brand-red hover:bg-brand-red-dark mt-4 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-sm border px-5 py-3 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              {submitLabel}
              <ArrowRight size={16} aria-hidden="true" />
            </button>
            <p
              id="quote-note"
              className="text-hero-copy mt-4 text-xs leading-relaxed"
            >
              {note}
            </p>
            {emailDraft && (
              <div className="bg-proof-surface text-hero-heading mt-4 rounded-md p-4 text-sm">
                <p role="status">{draftNotice}</p>
                <a
                  href={emailDraft}
                  className="text-brand-red outline-brand-red mt-2 inline-block font-semibold underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4"
                >
                  {draftLinkLabel}
                </a>
              </div>
            )}
          </form>
        </Reveal>
        <Reveal delay={0.1} className="min-w-0 lg:pt-7">
          <p className="text-brand-red mb-3 text-xs font-semibold tracking-[0.16em] uppercase">
            {contact.eyebrow}
          </p>
          <h2 className="text-hero-heading text-2xl leading-snug font-bold tracking-tight">
            {contact.heading}
          </h2>
          <ul className="divide-trust-border border-trust-border mt-5 divide-y border-t">
            {[
              {
                label: contact.officeLabel,
                Icon: MapPin,
                content: (
                  <address className="not-italic">
                    {contact.company}
                    <br />
                    {contact.address}
                  </address>
                ),
              },
              {
                label: contact.phoneLabel,
                Icon: Phone,
                content: (
                  <a
                    href={contact.phoneHref}
                    className="hover:text-brand-red focus-visible:outline-brand-red focus-visible:outline-2"
                  >
                    {contact.phone}
                  </a>
                ),
              },
              {
                label: contact.emailLabel,
                Icon: Envelope,
                content: (
                  <a
                    href={contact.emailHref}
                    className="hover:text-brand-red focus-visible:outline-brand-red wrap-anywhere focus-visible:outline-2"
                  >
                    {contact.email}
                  </a>
                ),
              },
            ].map(({ label, Icon, content }) => (
              <li
                key={label}
                className="flex flex-col items-center gap-4 py-4 lg:flex-row lg:items-start"
              >
                <span
                  className="bg-proof-accent text-hero-heading grid size-10 shrink-0 place-items-center rounded-md"
                  aria-hidden="true"
                >
                  <Icon size={21} />
                </span>
                <div className="min-w-0">
                  <h3 className="text-hero-copy text-xs font-semibold tracking-[0.12em] uppercase">
                    {label}
                  </h3>
                  <div className="text-hero-heading mt-1 text-sm leading-relaxed font-medium">
                    {content}
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="bg-proof-surface relative mt-2 aspect-[2/1] overflow-hidden rounded-md">
            <iframe
              src={map.src}
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={map.title}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
