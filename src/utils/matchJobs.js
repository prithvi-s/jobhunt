// Scores jobs against a saved profile. A job matches if any keyword appears in
// its title/company/description, or if its location equals the preferred one.
// Title hits count more than description hits so the best fits float to the top.
const TITLE_WEIGHT = 3;
const COMPANY_WEIGHT = 2;
const DESCRIPTION_WEIGHT = 1;
const LOCATION_WEIGHT = 2;

export function scoreJob(job, profile) {
  if (!profile) return 0;
  let score = 0;

  for (const keyword of profile.keywords) {
    const k = keyword.toLowerCase();
    if (!k) continue;
    if (job.title.toLowerCase().includes(k)) score += TITLE_WEIGHT;
    if (job.company.toLowerCase().includes(k)) score += COMPANY_WEIGHT;
    if (job.description.toLowerCase().includes(k)) score += DESCRIPTION_WEIGHT;
  }

  if (profile.preferredLocation && job.location === profile.preferredLocation) {
    score += LOCATION_WEIGHT;
  }

  return score;
}

export function matchJobs(jobs, profile) {
  return jobs
    .map(job => ({ job, score: scoreJob(job, profile) }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .map(({ job }) => job);
}
