type Repo = {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  pushed_at: string;
};

const FEATURED_REPOS = ["pulse", "ROOF", "butcher-shop", "Hotel-Booking-Website-Working-Code-master"];

async function getRepos(): Promise<Repo[]> {
  try {
    const results = await Promise.all(
      FEATURED_REPOS.map((name) =>
        fetch(`https://api.github.com/repos/Sufyanulhaq/${name}`, {
          next: { revalidate: 3600 },
          headers: { Accept: "application/vnd.github+json" },
        }).then((res) => (res.ok ? res.json() : null)),
      ),
    );
    return results.filter(Boolean) as Repo[];
  } catch {
    return [];
  }
}

export async function GitHubActivity() {
  const repos = await getRepos();
  if (repos.length === 0) return null;

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {repos.map((repo) => (
        <a
          key={repo.name}
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="card-surface block rounded-xl p-5"
        >
          <div className="flex items-center justify-between gap-2">
            <span className="font-mono text-sm font-medium">{repo.name}</span>
            {repo.stargazers_count > 0 && (
              <span className="text-xs text-foreground-soft">★ {repo.stargazers_count}</span>
            )}
          </div>
          {repo.description && (
            <p className="mt-2 text-sm text-foreground/70">{repo.description}</p>
          )}
          <div className="mt-3 flex items-center gap-3 text-xs text-foreground-soft">
            {repo.language && <span>{repo.language}</span>}
            <span>
              Updated{" "}
              {new Date(repo.pushed_at).toLocaleDateString("en-GB", {
                month: "short",
                year: "numeric",
              })}
            </span>
          </div>
        </a>
      ))}
    </div>
  );
}
