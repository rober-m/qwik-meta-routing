import type { DocumentHeadValue } from "@builder.io/qwik-city";
import { SITE } from "~/config.mjs";

///////////////////////////////// TYPES ///////////////////////////////////
///////////////////////////////////////////////////////////////////////////

export type TwitterMetaData = {
    name: string;
    content: any;
}[];

export type GenericMetaData = {
    property: string;
    content: any;
}[];

////////////////////////////// METADATA BUILDERS //////////////////////////
///////////////////////////////////////////////////////////////////////////

const twitterMetadata = (
    maybeHead?: Required<DocumentHeadValue>
): TwitterMetaData => {
    const siteHasTwitter = SITE.siteTwitterHandle
        ? [{ name: "twitter:site", content: SITE.siteTwitterHandle }]
        : [];
    const creatorHasTwitter = SITE.authorTwitterHandle
        ? [
              {
                  name: "twitter:creator",
                  content: SITE.authorTwitterHandle,
              },
          ]
        : [];
    const twTitle =
        maybeHead == undefined
            ? SITE.title
            : maybeHead.frontmatter.twitter.title;
    const twitterMeta = [
        { name: "twitter:card", content: "summary_large_image" },
        {
            name: "twitter:title",
            content: twTitle,
        },
    ].concat(siteHasTwitter, creatorHasTwitter);
    return twitterMeta;
};

const facebookMetadata: GenericMetaData = SITE.facebookPageURL
    ? [
          {
              property: "article:publisher",
              content: SITE.facebookPageURL,
          },
      ]
    : [];

const languages: GenericMetaData = SITE.languages.map((lang, i) => {
    const isDefault = i === 0;
    return {
        property: isDefault ? "og:locale" : "og:locale:alternate",
        content: lang,
    };
});

const genericMetadata = (
    maybeHead?: Required<DocumentHeadValue>
): GenericMetaData => {
    const isPost = maybeHead != undefined;
    const url = isPost
        ? `${SITE.origin}/${maybeHead.frontmatter.slug}/`
        : SITE.origin;
    const basicMeta = [
        {
            property: "robots",
            content:
                "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
        },
        { property: "author", content: SITE.author },
    ];
    const ogMeta = [
        { property: "og:type", content: "article" },
        { property: "og:image:width", content: "1920" },
        { property: "og:image:height", content: "990" },
        { property: "og:image:type", content: "image/png" },
        { property: "og:url", content: url },
        { property: "og:site_name", content: SITE.siteName },
    ].concat(
        isPost ? [] : [{ property: "og:image", content: SITE.defaultImage }]
    );
    return basicMeta.concat(ogMeta);
};

export function buildHeadWithCustomMetadata(
    maybeHead?: Required<DocumentHeadValue>
): DocumentHeadValue {
    const title = maybeHead == undefined ? SITE.title : maybeHead.title;
    const genericMeta = genericMetadata(maybeHead);
    const twitterMeta = twitterMetadata(maybeHead);
    // const genericLinks = genericLinkTags(maybeHead);
    const allMetaTogether = [
        ...facebookMetadata,
        ...languages,
        ...twitterMeta,
        ...genericMeta,
    ];
    // console.log(
    //     "buildHeadWithCustomMetadata() -> allMetaTogether: ",
    //     allMetaTogether,
    // );
    return {
        ...maybeHead,
        title: title,
        meta: allMetaTogether,
    };
}
