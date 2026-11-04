import { projectWebsites, type RepoMinimal } from "../data/generated";

function formatUpdatedAt(updated_at: string): string {
  if (!updated_at) return "\u2014";
  try {
    const date = new Date(updated_at);
    if (Number.isNaN(date.getTime())) return "\u2014";
    return new Intl.DateTimeFormat("en-GB", { month: "short", year: "numeric" }).format(date);
  } catch {
    return "\u2014";
  }
}

export interface RepoCardProps {
  repo: RepoMinimal;
}

export default function RepoCard({ repo }: RepoCardProps) {
  const description = repo.description?.trim() || "No description";
  const updatedLabel = formatUpdatedAt(repo.updated_at);
  const website = projectWebsites[repo.name] || repo.homepage?.trim() || "";

  return (
    <article className="project-item">
      <div className="project-heading">
        <h3 className="project-name">
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {repo.name}
            <span aria-hidden> ↗</span>
          </a>
        </h3>
        <span className="project-date">Updated {updatedLabel}</span>
      </div>
      <p className="project-desc">{description}</p>
      <div className="project-meta">
        {repo.language && <span>{repo.language}</span>}
        <span aria-label={`${repo.stargazers_count} stars`}>
            ★ {repo.stargazers_count}
        </span>
        {website && (
          <a
            className="project-website"
            href={website}
            target="_blank"
            rel="noopener noreferrer"
          >
            Website<span aria-hidden> ↗</span>
          </a>
        )}
      </div>
    </article>
  );
}
