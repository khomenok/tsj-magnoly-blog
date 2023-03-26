import type {MarkdownInstance} from "astro";

export interface PageProps {
    title: string;
    description: string;
    pubDate: string;
}

export const sortByPubDateDesc = (a: MarkdownInstance<PageProps>, b: MarkdownInstance<PageProps>) => {
    return new Date(a.frontmatter.pubDate) < new Date(b.frontmatter.pubDate) ? 1 : -1;
}

export const groupByYear = (pages: MarkdownInstance<Record<string, any>>[]) => {
    const years: Record<string, MarkdownInstance<Record<string, any>>[]> = {};
    pages.forEach(page => {
        console.log(page.frontmatter.pubDate.split('.')[2]);
        const year = page.frontmatter.pubDate.split('.')[2] as string; // todo: add types
        if (!(year in years)) {
            years[year] = [page];
        } else {
            years[year].push(page);
        }
    });

    return years;
}
