import { Social } from "./SocialType";

export interface Report {
  name: string;
  provider?: Provider;
  owner: Owner;
  full_name: string;
  id: string;
  created_at: string;
  self_url: SelfUrlOrBranchesUrl;
  branches_url: SelfUrlOrBranchesUrl;
  last_touch?: string;
  description?: string;
  main?: string;
  preview?: string;
  tags?: string[];
  title?: string;
  latest_version?: string;
  stargazers?: Stargazers[];
  updated_at?: string;
  unlisted?: boolean;
  visibility?: string;
  pin?: boolean;
}
export interface Provider {
  source: string;
  owner: string;
  name: string;
  default_branch: string;
}
export interface Owner {
  name: string;
  billing_email: string;
  avatar_url: string;
  profile_picture: string;
  bio: string;
  link: string;
  location: string;
  access_domains?: null[];
  type: string;
  id: string;
  created_at: string;
  updated_at: string;
  self_url: SelfUrlOrBranchesUrl;
}

export interface SelfUrlOrBranchesUrl {
  api: string;
  ui: string;
}

export interface Stargazers {
  class_name: string;
  object_id: string;
}

export interface ReportSocial extends Report {
  social?: Social;
}

export type ReportState = {
  reports: Report[];
  reportsSocials: ReportSocial[];
};

export type ReportAction = {
  report?: Report;
  reports?: Report[];
};
