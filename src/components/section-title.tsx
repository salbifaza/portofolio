import type { ReactNode } from "react";

type SectionTitleProps = {
    children: ReactNode;
}

export function SectionTitle({ children }: SectionTitleProps) {
    return (
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-12 text-center">
            {children}
        </h2>
    );
}
