import { Slot, component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { buildHeadWithCustomMetadata } from "~/utils/metadata-builders";

export default component$(() => {
    return (
        <section>
            <article>
                <Slot />
            </article>
        </section>
    );
});

export const head: DocumentHead = ({ head }) =>
    buildHeadWithCustomMetadata(head);
