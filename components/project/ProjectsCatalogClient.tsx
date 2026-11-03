"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Search, X, Sparkles } from "lucide-react";
import type { Project, ProjectCategory } from "@/types/project";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const categories: ("All" | ProjectCategory)[] = [
  "All",
  "SaaS",
  "Web App",
  "Open Source",
  "Infrastructure",
];

interface ProjectsCatalogClientProps {
  initialProjects: Project[];
}

export function ProjectsCatalogClient({
  initialProjects,
}: ProjectsCatalogClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<
    "All" | ProjectCategory
  >("All");

  const filteredProjects = useMemo(() => {
    return initialProjects.filter((project) => {
      const matchesCategory =
        selectedCategory === "All" || project.category === selectedCategory;

      const query = searchQuery.trim().toLowerCase();
      if (!query) return matchesCategory;

      const matchesTitle = project.title.toLowerCase().includes(query);
      const matchesDesc = project.description.toLowerCase().includes(query);
      const matchesTags = project.tags.some((tag) =>
        tag.toLowerCase().includes(query)
      );

      return matchesCategory && (matchesTitle || matchesDesc || matchesTags);
    });
  }, [initialProjects, searchQuery, selectedCategory]);

  const hasActiveFilters = searchQuery.trim() !== "" || selectedCategory !== "All";

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
  };

  return (
    <div className="space-y-12">
      {/* Filter and Search Bar */}
      <div className="glass-card rounded-3xl border border-white/10 p-6 shadow-2xl space-y-6">
        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
            <Input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by project name, stack (Rust, Next.js, Redis), or keyword..."
              aria-label="Search projects"
              className="pl-11 pr-10 bg-black/60 border-white/15 text-white placeholder:text-slate-400 rounded-2xl h-12 focus-visible:ring-slate-300 text-sm"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                aria-label="Clear search"
                className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-white rounded-full hover:bg-white/10 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Reset button if active */}
          {hasActiveFilters && (
            <Button
              variant="outline"
              onClick={handleResetFilters}
              className="rounded-2xl border-white/15 bg-white/5 text-xs uppercase tracking-wider text-slate-200 hover:text-white hover:bg-white/10 h-12 px-5"
            >
              Reset Filters
            </Button>
          )}
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/10">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 mr-2">
            Categories:
          </span>
          {categories.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-4 py-2 text-xs font-medium tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 ${
                  isSelected
                    ? "bg-white text-black font-bold shadow-md shadow-white/10 scale-105"
                    : "border border-white/10 bg-white/5 text-slate-300 hover:text-white hover:border-white/20"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Count Banner */}
      <div className="flex items-center justify-between text-xs tracking-wide text-slate-300 px-2 font-medium">
        <span>
          Showing <strong className="text-white">{filteredProjects.length}</strong> of {initialProjects.length} projects
        </span>
        {hasActiveFilters && (
          <span className="text-slate-400">Filtered view active</span>
        )}
      </div>

      {/* Projects Grid or Empty State */}
      {filteredProjects.length > 0 ? (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <article
              key={project.slug}
              className="group glass-card flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 p-5 shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:border-white/25 focus-within:border-white/30"
            >
              <div className="space-y-4">
                {/* Thumbnail Cover */}
                {project.heroImage?.src && (
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10 bg-black/40">
                    <Image
                      src={project.heroImage.src}
                      alt={project.heroImage.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="rounded-full bg-black/80 backdrop-blur-md px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-slate-200 border border-white/10 shadow-sm">
                        {project.category}
                      </span>
                    </div>
                  </div>
                )}

                <div>
                  <h2 className="text-xl font-bold text-white group-hover:text-slate-100 transition-colors">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 rounded"
                    >
                      {project.title}
                    </Link>
                  </h2>

                  <p className="mt-2 text-sm leading-relaxed text-slate-300 line-clamp-3 font-normal">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/5 border border-white/10 px-2.5 py-1 text-[11px] font-medium text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/projects/${project.slug}`}
                  aria-label={`Explore ${project.title} case study`}
                  className="rounded-full p-2 text-slate-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="glass-card rounded-3xl border border-dashed border-white/20 p-12 sm:p-16 text-center space-y-6">
          <div className="mx-auto inline-flex p-4 rounded-2xl bg-white/5 text-slate-300 border border-white/10">
            <Sparkles className="h-6 w-6 text-amber-400" />
          </div>
          <div className="space-y-2 max-w-md mx-auto">
            <h3 className="text-2xl font-bold text-white">
              No matching projects found
            </h3>
            <p className="text-sm leading-relaxed text-slate-300">
              No projects matched your criteria for &quot;
              {searchQuery || selectedCategory}&quot;. Try adjusting your keywords
              or reset the category filter.
            </p>
          </div>
          <Button
            onClick={handleResetFilters}
            className="rounded-full bg-white px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-black hover:bg-slate-200"
          >
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  );
}
