import { Slot, component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
    return (
        <section>
            <article>
                <Slot />
            </article>
        </section>
    );
});

export const head: DocumentHead = {
    title: "Blog - title",
    meta: [
        { property: "description", content: "Blog - description" },
        { property: "robots", content: "index, follow" },
        { property: "author", content: "Blog - author" },
        { property: "og:locale", content: "es" },
        { property: "og:type", content: "Blog - article" },
        { property: "og:image:width", content: "1920" },
        { property: "og:image:height", content: "990" },
        { property: "og:image:type", content: "image/png" },
        { property: "og:url", content: "Blog - url" },
        { property: "og:site_name", content: "Blog - site_name" },
        { property: "article:publisher", content: "Blog - publisher" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:site", content: "Blog - twitter:site" },
        { name: "twitter:title", content: "Blog - twitter:title" },
        { name: "twitter:creator", content: "Blog - twitter:creator" },
    ],
};
