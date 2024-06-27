import { ReactNode } from "react";

export interface InfoModalProps {
  show: boolean;
  onClose: () => void;
  children: ReactNode;
}
