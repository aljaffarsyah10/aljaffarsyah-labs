"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
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
      <div className="glass-card rounded-3xl border border-white/10 p-6 shadow-xl space-y-6">
        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500 pointer-events-none" />
            <Input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by project name, tech stack, or keyword..."
              aria-label="Search projects"
              className="pl-11 pr-10 bg-black/60 border-white/10 text-white placeholder:text-slate-500 rounded-2xl h-12 focus-visible:ring-slate-300"
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
              className="rounded-2xl border-white/15 bg-white/5 text-xs uppercase tracking-wider text-slate-300 hover:text-white hover:bg-white/10 h-12 px-5"
            >
              Reset Filters
            </Button>
          )}
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/5">
          <span className="text-xs uppercase tracking-[0.2em] text-slate-500 mr-2">
            Categories:
          </span>
          {categories.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-4 py-2 text-xs uppercase tracking-[0.16em] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 ${
                  isSelected
                    ? "bg-slate-100 text-black font-semibold shadow-md"
                    : "border border-white/10 bg-white/5 text-slate-400 hover:text-white hover:border-white/20"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-slate-400 px-2">
        <span>
          Showing {filteredProjects.length} of {initialProjects.length} projects
        </span>
        {hasActiveFilters && (
          <span className="text-slate-500">Filtered view active</span>
        )}
      </div>

      {/* Projects Grid or Empty State */}
      {filteredProjects.length > 0 ? (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <article
              key={project.slug}
              className="group glass-card flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 p-6 shadow-xl shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 focus-within:border-white/30"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-4">
                  <span className="rounded-full bg-white/10 px-3 py-1 font-mono uppercase tracking-wider text-[11px] text-slate-200">
                    {project.category}
                  </span>
                  <span className="text-[11px] uppercase tracking-wider text-slate-500">
                    {project.tags.length} technologies
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-white group-hover:text-slate-100 transition-colors">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 rounded"
                  >
                    {project.title}
                  </Link>
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-400 line-clamp-3">
                  {project.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/5 px-2.5 py-1 text-[10px] uppercase tracking-wider text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/projects/${project.slug}`}
                  aria-label={`Explore ${project.title} case study`}
                  className="rounded-full p-2 text-slate-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="glass-card rounded-3xl border border-dashed border-white/15 p-12 sm:p-16 text-center space-y-6">
          <div className="mx-auto inline-flex p-4 rounded-2xl bg-white/5 text-slate-400 border border-white/10">
            <Sparkles className="h-6 w-6" />
          </div>
          <div className="space-y-2 max-w-md mx-auto">
            <h3 className="text-xl font-bold text-white">
              No matching projects found
            </h3>
            <p className="text-sm text-slate-400">
              No projects matched your criteria for &quot;
              {searchQuery || selectedCategory}&quot;. Try adjusting your keywords
              or reset the category filter.
            </p>
          </div>
          <Button
            onClick={handleResetFilters}
            className="rounded-full bg-slate-100 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.24em] text-black hover:bg-white"
          >
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  );
}

