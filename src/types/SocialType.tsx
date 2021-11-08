export type Social = {
    id: string;
    number_of_comments: number,
    stars: number,
    views: number
  };
  
  export type SocialState = {
    socials: Social[];
  };
  
  export type SocialAction = {
    social?: Social;
    socials?: Social[];
  };
  