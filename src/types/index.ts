type TSocial = {
  slug: string;
  url: string;
};

type TDate = {
  from?: string;
  to?: string;
};

type TEvent = {
  date: TDate;
  heading: string;
  subheading?: string;
  details?: string[];
};

export type { TSocial, TEvent };
