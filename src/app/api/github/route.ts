import { NextResponse } from "next/server";

const GITHUB_USERNAME = process.env.GITHUB_USERNAME || "amalverse";

interface GitHubRepo {
  stargazers_count: number;
  name: string;
  html_url: string;
}

export async function GET() {
  try {
    // Fetch user profile for general stats
    const userRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, {
      next: { revalidate: 3600 } // Cache for 1 hour
    });
    
    if (!userRes.ok) {
      throw new Error("Failed to fetch GitHub user");
    }
    const userData = await userRes.json();

    // Fetch repos for stars calculation
    const reposRes = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`,
      { next: { revalidate: 3600 } }
    );
    
    if (!reposRes.ok) {
      throw new Error("Failed to fetch GitHub repos");
    }
    const reposData: GitHubRepo[] = await reposRes.json();

    const totalStars = reposData.reduce(
      (acc: number, repo: GitHubRepo) => acc + (repo.stargazers_count || 0),
      0
    );

    const topRepo = reposData.length > 0 ? [...reposData].sort((a: GitHubRepo, b: GitHubRepo) => b.stargazers_count - a.stargazers_count)[0] : null;

    return NextResponse.json({
      username: userData.login,
      name: userData.name,
      avatar: userData.avatar_url,
      bio: userData.bio,
      location: userData.location,
      company: userData.company,
      repos: userData.public_repos,
      followers: userData.followers,
      following: userData.following,
      stars: totalStars,
      hireable: userData.hireable,
      topRepo: topRepo
        ? {
            name: topRepo.name,
            stars: topRepo.stargazers_count,
            url: topRepo.html_url,
          }
        : null,
    });
  } catch (error) {
    console.error("Error in GitHub API:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
