export interface LinkProps {
  link: string;
  name: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  description?: string;
  category?: string;
  date?: string;
  color?: string;
  links?: LinkProps[];
}
