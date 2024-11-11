export interface LinkProps {
    id: string;
    link: string;
    name: string;
}
  
export interface PortfolioItem {
    id: string;
    title: string;
    image?: string;
    description?: string;
    category?: string;
    date?: string;
    color?: string;
    links?: LinkProps[];
}