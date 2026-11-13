"use client";

import { useState, useRef, FormEvent, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import type { ProjectItem, ProjectCategory } from "@/lib/projectsStore";

type Mode = "create" | "edit";

interface ProjectFormProps {
  mode: Mode;
  initialData?: Partial<ProjectItem>;
  slug?: string;
}

const CATEGORIES: ProjectCategory[] = [
  "Websites",
  "E-Commerce",
  "Web Systems",
  "Mobile Apps",
  "UI/UX",
];

const REGIONS: ProjectItem["clientRegion"][] = [
  "Sri Lanka",
  "Australia",
  "International",
];

export function ProjectForm({ mode, initialData, slug }: ProjectFormProps) {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [form, setForm] = useState<Partial<ProjectItem>>({
    title: "",
    category: "Websites",
    tagline: "",
    description: "",
    overview: "",
    challenge: "",
    solution: "",
    image: "",
    technologies: [],
    liveUrl: "",
    githubUrl: "",
    featured: false,
    clientRegion: "Sri Lanka",
    keyFeatures: [],
    deliverables: [],
    ...initialData,
  });

  const [techInput, setTechInput] = useState("");
  const [keyFeaturesText, setKeyFeaturesText] = useState(
    (initialData?.keyFeatures ?? []).join("\n")
  );
  const [deliverablesText, setDeliverablesText] = useState(
    (initialData?.deliverables ?? []).join("\n")
  );

  const [imagePreview, setImagePreview] = useState(initialData?.image ?? "");
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function set<K extends keyof ProjectItem>(key: K, val: ProjectItem[K]) {
    setForm((prev) => ({ ...prev, [key]: val }));
  }

  function addTech(e: React.KeyboardEvent<HTMLInputElement>) {
    if ((e.key === "Enter" || e.key === ",") && techInput.trim()) {
      e.preventDefault();
      const tag = techInput.trim().replace(/,$/, "");
      if (tag && !(form.technologies ?? []).includes(tag)) {
        set("technologies", [...(form.technologies ?? []), tag]);
      }
      setTechInput("");
    }
  }

  function removeTech(tech: string) {
    set("technologies", (form.technologies ?? []).filter((t) => t !== tech));
  }

  async function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setError("");
    const fd = new FormData();
    fd.append("file", file);

    try {
      const res = await fetch("/api/admin/upload", { method: "POST", body: fd });
      const data = await res.json() as { url?: string; error?: string };
      if (res.ok && data.url) {
        set("image", data.url);
        setImagePreview(data.url);
      } else {
        setError(data.error ?? "Upload failed");
      }
    } catch {
      setError("Upload failed. Please try again.");
    } finally {
      setUploading(false);
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    setSuccess("");
    setSaving(true);

    const payload: Partial<ProjectItem> = {
      ...form,
      keyFeatures: keyFeaturesText.split("\n").map((s) => s.trim()).filter(Boolean),
      deliverables: deliverablesText.split("\n").map((s) => s.trim()).filter(Boolean),
    };

    try {
      let res: Response;
      if (mode === "create") {
        res = await fetch("/api/admin/projects", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } else {
        res = await fetch(`/api/admin/projects/${slug}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      }

      const data = await res.json() as { error?: string; slug?: string };

      if (res.ok) {
        setSuccess(mode === "create" ? "Project created!" : "Project updated!");
        setTimeout(() => router.push("/admin/projects"), 1200);
      } else {
        setError(data.error ?? "Failed to save project.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setSaving(false);
    }
  }

  /* ── Field styles ──────────────────────────────────────── */
  const inputCls =
    "w-full px-3.5 py-2.5 rounded-lg bg-[var(--vortex-bg)] border border-[var(--vortex-border)] text-[var(--vortex-text)] text-sm placeholder:text-[var(--vortex-muted)] focus:outline-none focus:border-[var(--vortex-primary)] focus:ring-1 focus:ring-[var(--vortex-primary)] transition-colors";
  const labelCls =
    "block text-xs font-semibold uppercase tracking-wider text-[var(--vortex-secondary-text)] mb-1.5";
  const textareaCls = `${inputCls} resize-y min-h-[90px]`;

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* ── Core Details ───────────────────────────────────── */}
      <section>
        <h2 className="text-xs font-bold uppercase tracking-widest text-[var(--vortex-primary)] mb-4">
          Core Details
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Title */}
          <div className="md:col-span-2">
            <label className={labelCls}>Project Name *</label>
            <input
              className={inputCls}
              required
              value={form.title ?? ""}
              onChange={(e) => set("title", e.target.value)}
              placeholder="e.g. Aurora DTC Lifestyle E-Commerce"
            />
          </div>

          {/* Category */}
          <div>
            <label className={labelCls}>Category *</label>
            <select
              className={inputCls}
              required
              value={form.category ?? "Websites"}
              onChange={(e) => set("category", e.target.value as ProjectCategory)}
            >
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          {/* Client Region */}
          <div>
            <label className={labelCls}>Client Region *</label>
            <select
              className={inputCls}
              value={form.clientRegion ?? "Sri Lanka"}
              onChange={(e) =>
                set("clientRegion", e.target.value as ProjectItem["clientRegion"])
              }
            >
              {REGIONS.map((r) => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
          </div>

          {/* Tagline */}
          <div className="md:col-span-2">
            <label className={labelCls}>Tagline</label>
            <input
              className={inputCls}
              value={form.tagline ?? ""}
              onChange={(e) => set("tagline", e.target.value)}
              placeholder="Short one-liner describing the project"
            />
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className={labelCls}>Description *</label>
            <textarea
              className={textareaCls}
              required
              value={form.description ?? ""}
              onChange={(e) => set("description", e.target.value)}
              placeholder="2–3 sentences summarizing what was built and why"
            />
          </div>

          {/* Live URL */}
          <div>
            <label className={labelCls}>Live URL</label>
            <input
              className={inputCls}
              type="url"
              value={form.liveUrl ?? ""}
              onChange={(e) => set("liveUrl", e.target.value)}
              placeholder="https://example.com"
            />
          </div>

          {/* GitHub URL */}
          <div>
            <label className={labelCls}>GitHub URL</label>
            <input
              className={inputCls}
              type="url"
              value={form.githubUrl ?? ""}
              onChange={(e) => set("githubUrl", e.target.value)}
              placeholder="https://github.com/..."
            />
          </div>

          {/* Featured */}
          <div className="flex items-center gap-3 pt-1">
            <input
              id="featured"
              type="checkbox"
              checked={form.featured ?? false}
              onChange={(e) => set("featured", e.target.checked)}
              className="w-4 h-4 rounded border-[var(--vortex-border)] bg-[var(--vortex-bg)] accent-[var(--vortex-primary)] cursor-pointer"
            />
            <label htmlFor="featured" className="text-sm text-[var(--vortex-secondary-text)] cursor-pointer select-none">
              Mark as Featured Project
            </label>
          </div>
        </div>
      </section>

      {/* ── Project Image ──────────────────────────────────── */}
      <section>
        <h2 className="text-xs font-bold uppercase tracking-widest text-[var(--vortex-primary)] mb-4">
          Project Image
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
          <div>
            <label className={labelCls}>Upload Image</label>
            <div
              onClick={() => fileInputRef.current?.click()}
              className="flex flex-col items-center justify-center border-2 border-dashed border-[var(--vortex-border)] rounded-xl p-8 cursor-pointer hover:border-[var(--vortex-primary)] hover:bg-[var(--vortex-primary)]/5 transition-colors"
            >
              {uploading ? (
                <svg className="animate-spin w-8 h-8 text-[var(--vortex-primary)]" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                </svg>
              ) : (
                <>
                  <svg className="w-8 h-8 text-[var(--vortex-muted)] mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                  </svg>
                  <p className="text-sm text-[var(--vortex-muted)]">Click to upload</p>
                  <p className="text-xs text-[var(--vortex-muted)] mt-1">PNG, JPG, WEBP, SVG</p>
                </>
              )}
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />

            <div className="mt-3">
              <label className={labelCls}>Or enter image URL</label>
              <input
                className={inputCls}
                value={form.image ?? ""}
                onChange={(e) => {
                  set("image", e.target.value);
                  setImagePreview(e.target.value);
                }}
                placeholder="/projects/my-image.png"
              />
            </div>
          </div>

          {/* Preview */}
          {imagePreview && (
            <div>
              <label className={labelCls}>Preview</label>
              <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-[var(--vortex-border)] bg-[var(--vortex-bg)]">
                <Image
                  src={imagePreview}
                  alt="Project preview"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── Tech Stack ─────────────────────────────────────── */}
      <section>
        <h2 className="text-xs font-bold uppercase tracking-widest text-[var(--vortex-primary)] mb-4">
          Tech Stack
        </h2>
        <label className={labelCls}>Technologies (press Enter or comma to add)</label>
        <input
          className={inputCls}
          value={techInput}
          onChange={(e) => setTechInput(e.target.value)}
          onKeyDown={addTech}
          placeholder="e.g. React, Node.js, TypeScript..."
        />
        {(form.technologies ?? []).length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {(form.technologies ?? []).map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-[var(--vortex-primary)]/10 text-[var(--vortex-primary)] border border-[var(--vortex-primary)]/20"
              >
                {tech}
                <button
                  type="button"
                  onClick={() => removeTech(tech)}
                  className="text-[var(--vortex-primary)] hover:text-red-400 transition-colors"
                  aria-label={`Remove ${tech}`}
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        )}
      </section>

      {/* ── Project Narrative ──────────────────────────────── */}
      <section>
        <h2 className="text-xs font-bold uppercase tracking-widest text-[var(--vortex-primary)] mb-4">
          Project Narrative
        </h2>
        <div className="space-y-5">
          <div>
            <label className={labelCls}>Overview</label>
            <textarea
              className={textareaCls}
              value={form.overview ?? ""}
              onChange={(e) => set("overview", e.target.value)}
              placeholder="Background and context of the project..."
            />
          </div>
          <div>
            <label className={labelCls}>Challenge</label>
            <textarea
              className={textareaCls}
              value={form.challenge ?? ""}
              onChange={(e) => set("challenge", e.target.value)}
              placeholder="What problem did the client face?"
            />
          </div>
          <div>
            <label className={labelCls}>Solution</label>
            <textarea
              className={textareaCls}
              value={form.solution ?? ""}
              onChange={(e) => set("solution", e.target.value)}
              placeholder="How did Vortexz solve it?"
            />
          </div>
        </div>
      </section>

      {/* ── Features & Deliverables ────────────────────────── */}
      <section>
        <h2 className="text-xs font-bold uppercase tracking-widest text-[var(--vortex-primary)] mb-4">
          Features &amp; Deliverables
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className={labelCls}>Key Features (one per line)</label>
            <textarea
              className={textareaCls}
              value={keyFeaturesText}
              onChange={(e) => setKeyFeaturesText(e.target.value)}
              placeholder={"Role-based authentication\nReal-time dashboard\nPDF export"}
              style={{ minHeight: "130px" }}
            />
          </div>
          <div>
            <label className={labelCls}>Deliverables (one per line)</label>
            <textarea
              className={textareaCls}
              value={deliverablesText}
              onChange={(e) => setDeliverablesText(e.target.value)}
              placeholder={"Web Application\nRESTful API\nAdmin Dashboard"}
              style={{ minHeight: "130px" }}
            />
          </div>
        </div>
      </section>

      {/* ── Feedback & Submit ──────────────────────────────── */}
      {error && (
        <div className="flex items-start gap-2 bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">
          <svg className="w-4 h-4 text-red-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-sm text-red-400">{error}</p>
        </div>
      )}

      {success && (
        <div className="flex items-start gap-2 bg-green-500/10 border border-green-500/20 rounded-lg px-4 py-3">
          <svg className="w-4 h-4 text-green-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <p className="text-sm text-green-400">{success}</p>
        </div>
      )}

      <div className="flex items-center gap-3 pt-2 border-t border-[var(--vortex-border)]">
        <button
          type="submit"
          disabled={saving || uploading}
          className="px-6 py-2.5 rounded-lg bg-[var(--vortex-primary)] hover:bg-blue-500 text-white font-medium text-sm transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center gap-2"
        >
          {saving ? (
            <>
              <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
              </svg>
              Saving...
            </>
          ) : mode === "create" ? (
            "Create Project"
          ) : (
            "Save Changes"
          )}
        </button>
        <button
          type="button"
          onClick={() => router.push("/admin/projects")}
          className="px-5 py-2.5 rounded-lg border border-[var(--vortex-border)] text-[var(--vortex-secondary-text)] hover:text-[var(--vortex-text)] hover:bg-[var(--vortex-card-hover)] font-medium text-sm transition-colors"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
