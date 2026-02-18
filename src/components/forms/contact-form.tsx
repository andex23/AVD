"use client";

import { type FormEvent, useMemo, useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  name: z.string().min(2, "Name is required."),
  organization: z.string().min(2, "Organization is required."),
  email: z.string().email("Enter a valid email address."),
  phone: z.string().min(6, "Phone or WhatsApp is required."),
  projectType: z.string().min(1, "Select a project type."),
  budget: z.string().min(1, "Select a budget range."),
  timeline: z.string().min(1, "Select a timeline."),
  message: z.string().min(12, "Please share at least a short project summary."),
});

type FormValues = z.infer<typeof formSchema>;
type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: "",
  organization: "",
  email: "",
  phone: "",
  projectType: "",
  budget: "",
  timeline: "",
  message: "",
};

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const fields = useMemo(
    () => [
      {
        key: "name" as const,
        label: "Name",
        component: (
          <Input
            id="name"
            value={values.name}
            onChange={(event) => setValues((current) => ({ ...current, name: event.target.value }))}
            aria-invalid={Boolean(errors.name)}
          />
        ),
      },
      {
        key: "organization" as const,
        label: "Organization",
        component: (
          <Input
            id="organization"
            value={values.organization}
            onChange={(event) =>
              setValues((current) => ({ ...current, organization: event.target.value }))
            }
            aria-invalid={Boolean(errors.organization)}
          />
        ),
      },
      {
        key: "email" as const,
        label: "Email",
        component: (
          <Input
            id="email"
            type="email"
            value={values.email}
            onChange={(event) => setValues((current) => ({ ...current, email: event.target.value }))}
            aria-invalid={Boolean(errors.email)}
          />
        ),
      },
      {
        key: "phone" as const,
        label: "Phone / WhatsApp",
        component: (
          <Input
            id="phone"
            value={values.phone}
            onChange={(event) => setValues((current) => ({ ...current, phone: event.target.value }))}
            aria-invalid={Boolean(errors.phone)}
          />
        ),
      },
      {
        key: "projectType" as const,
        label: "Project Type",
        component: (
          <Select
            id="projectType"
            value={values.projectType}
            onChange={(event) =>
              setValues((current) => ({ ...current, projectType: event.target.value }))
            }
            aria-invalid={Boolean(errors.projectType)}
          >
            <option value="">Select project type</option>
            <option value="Website">Website</option>
            <option value="Website + CRM">Website + CRM</option>
            <option value="Website + Automation">Website + Automation</option>
            <option value="Full Stack">Full Stack</option>
          </Select>
        ),
      },
      {
        key: "budget" as const,
        label: "Budget Range",
        component: (
          <Select
            id="budget"
            value={values.budget}
            onChange={(event) => setValues((current) => ({ ...current, budget: event.target.value }))}
            aria-invalid={Boolean(errors.budget)}
          >
            <option value="">Select budget range</option>
            <option value="$5k-$15k">$5k-$15k</option>
            <option value="$15k-$30k">$15k-$30k</option>
            <option value="$30k-$60k">$30k-$60k</option>
            <option value="$60k+">$60k+</option>
          </Select>
        ),
      },
      {
        key: "timeline" as const,
        label: "Timeline",
        component: (
          <Select
            id="timeline"
            value={values.timeline}
            onChange={(event) => setValues((current) => ({ ...current, timeline: event.target.value }))}
            aria-invalid={Boolean(errors.timeline)}
          >
            <option value="">Select timeline</option>
            <option value="2-4 weeks">2-4 weeks</option>
            <option value="1-2 months">1-2 months</option>
            <option value="2-3 months">2-3 months</option>
            <option value="3+ months">3+ months</option>
          </Select>
        ),
      },
      {
        key: "message" as const,
        label: "Message",
        component: (
          <Textarea
            id="message"
            value={values.message}
            onChange={(event) => setValues((current) => ({ ...current, message: event.target.value }))}
            aria-invalid={Boolean(errors.message)}
          />
        ),
      },
    ],
    [errors, values],
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const result = formSchema.safeParse(values);

    if (!result.success) {
      const nextErrors: FormErrors = {};

      result.error.issues.forEach((issue) => {
        const key = issue.path[0] as keyof FormValues;
        if (!nextErrors[key]) {
          nextErrors[key] = issue.message;
        }
      });

      setErrors(nextErrors);
      setSubmitted(false);
      return;
    }

    setErrors({});

    const subject = encodeURIComponent(`New AVD project inquiry: ${values.organization}`);
    const body = encodeURIComponent([
      `Name: ${values.name}`,
      `Organization: ${values.organization}`,
      `Email: ${values.email}`,
      `Phone/WhatsApp: ${values.phone}`,
      `Project Type: ${values.projectType}`,
      `Budget: ${values.budget}`,
      `Timeline: ${values.timeline}`,
      "",
      "Message:",
      values.message,
    ].join("\n"));

    const mailtoHref = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;

    setSubmitted(true);
    window.open(mailtoHref, "_self");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 md:grid-cols-2">
        {fields.slice(0, 7).map((field) => (
          <div key={field.key} className={cn("space-y-2", field.key === "projectType" ? "md:col-span-2 lg:col-span-1" : "") }>
            <label htmlFor={field.key} className="text-sm font-medium text-[#1C1F26]">
              {field.label}
            </label>
            {field.component}
            {errors[field.key] ? (
              <p className="text-xs text-[#B91C1C]" role="alert">
                {errors[field.key]}
              </p>
            ) : null}
          </div>
        ))}
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-[#1C1F26]">
          Message
        </label>
        {fields.find((field) => field.key === "message")?.component}
        {errors.message ? (
          <p className="text-xs text-[#B91C1C]" role="alert">
            {errors.message}
          </p>
        ) : null}
      </div>

      <Button type="submit" className="w-full md:w-auto">
        Send Project Details
      </Button>

      {submitted ? (
        <p className="text-sm text-[#166534]" role="status">
          Draft opened in your email app. We respond within {siteConfig.responseSla}.
        </p>
      ) : null}
    </form>
  );
}
