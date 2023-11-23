export interface GithubItemInterface {
  name: string;
  description: string;
  owner: {
    avatar_url: string
  }
}

export interface GitHubResponseInterface {
  incomplete_results: boolean;
  items: GithubItemInterface[];
  total_count: number;
}