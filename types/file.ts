export type TGithubFile = {
  name: string;
  path: string;
  sha: string;
  size: number;
  url: string;
  html_url: string;
  git_url: string;
  download_url: string;
  type: 'file';
  _links: {
    self: string;
    git: string;
    html: string;
  };
};

export type TGithubFolder = 'projects' | 'artworks';
