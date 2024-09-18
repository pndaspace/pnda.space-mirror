import { ReactNode } from 'react';

type HighlightProperties = {
    children: ReactNode;
};

export default function Highlight({ children }: HighlightProperties) {
    return <span className="highlight">{children}</span>;
}
