export interface ButtonProps {
  label?: string;
  img?: string;
  variant: "primary" | "outline-primary" | "dark";
  isLoading?: boolean;
  type?: string;
  loadingMessage?: string;
  className?: string;
  onClick?: () => void;
  homeLoadMore?: boolean;
}
