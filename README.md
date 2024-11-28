# Next.js + Sanity CMS Demo

## Technology/Features

* Next.js 15 (app router)
* React 19
* Typescript
* Tailwind
* `next-sanity` - Embedded Sanity Studio
    * Access Studio at `/admin`
* [Portable Text](https://github.com/portabletext/react-portabletext)
* [GROQ](https://www.sanity.io/docs/groq)
* [Sanity Typegen](https://www.sanity.io/docs/cli-typegen)
    * Use scripts `sanity-schema` then `sanity-typegen` as defined in
    `package.json`

## Key Files/Locations

### Sanity

* `sanity.config.ts`
* `sanity-typegen.json`
* `src/sanity/...` - schemas, util functions, generated types
* `src/app/(routes)/(sanity)/...` - embedded studio route

### App

* `src/app/(routes)/(app)/page.tsx` - home page
* `src/app/(routes)/(app)/article/...` - article page (dynamic)
