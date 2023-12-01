import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";

import Infobox from "~/components/starter/infobox/infobox";

export default component$(() => {
    return (
        <>
            <div class="container container-flex">
                <div>
                    <Infobox>
                        <div q:slot="title" class="icon icon-apps">
                            Click below and check meta tags
                        </div>
                        <p>
                            <a href="/post">
                                Navigate to Blog Post using a-tag
                            </a>
                        </p>
                        <p>
                            <Link href="/post">
                                Navigate to Blog Post using Link-tag
                            </Link>
                        </p>
                    </Infobox>
                </div>
            </div>
        </>
    );
});

export const head: DocumentHead = {
    title: "Main - title",
    meta: [
        { property: "description", content: "Main - description" },
        { property: "robots", content: "index, follow" },
        { property: "author", content: "Main - author" },
        { property: "og:locale", content: "es" },
        { property: "og:type", content: "Main - article" },
        { property: "og:image:width", content: "1920" },
        { property: "og:image:height", content: "990" },
        { property: "og:image:type", content: "image/png" },
        { property: "og:url", content: "Main - url" },
        { property: "og:site_name", content: "Main - site_name" },
        { property: "article:publisher", content: "Main - publisher" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:site", content: "Main - twitter:site" },
        { name: "twitter:title", content: "Main - twitter:title" },
        { name: "twitter:creator", content: "Main - twitter:creator" },
    ],
};
