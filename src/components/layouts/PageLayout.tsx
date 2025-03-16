import { ReactNode } from "react"
import { twMerge } from "tailwind-merge";

type Props = {
	className?: string;
	children: ReactNode;
}

export default function PageLayout({ className, children }: Props) {
	return <div className={twMerge('grid grid-cols-12 md:h-screen', className)}>{children}</div>
}