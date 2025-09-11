/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable quotes */
import {
  BuildingWithClojureScript,
  CommonlyConfusedTerms,
  DifferentiateUXFromUI,
  SetupClojureScriptAndPhoenix,
  TransitionFromReactRouter,
  WaysVariablesAreDeclared,
  WritingBetterCommits,
  MakeWebAppWorkOffline,
} from 'Assets/Pngs'

import { ArticleType } from 'Types'

const ARTICLE_LIST: ArticleType[] = [
  {
    name: "How to Use Typescript's 'omit' Utility Type",
    bgImage: 'https://blog.openreplay.com/images/how-to-use-typescripts-omit-utility-type/images/hero.png',
    url: 'https://blog.openreplay.com/how-to-use-typescripts-omit-utility-type/',
    platform: 'Open Replay',
    description:
      'A commonly used utility type in TypeScript is Omit. This type allows developers to form a new type from an existing one by excluding specific fields. This tutorial shows how to use it to handle different scenarios, from simple to complex, and examines practical applications to see some real-life reasons why you might need to use it.',
  },
  {
    name: 'How to Build an Anonymous Messaging App With React and Phoenix',
    bgImage: 'https://blog.reventacademy.com/wp-content/uploads/2024/10/Media.jpeg',
    url: 'https://blog.reventacademy.com/building-an-anonymous-messaging-app-with-react-and-phoenix/',
    platform: 'Revent Academy Blog',
    description:
      'In this article, we’ll build an anonymous messaging application. We’ll use React to create a dynamic user interface and Phoenix to manage the server-side logic',
  },
  {
    name: 'Building An Infinite Select Dropdown Component With React',
    bgImage: 'https://blog.openreplay.com/images/infinite-select-dropdown-select-component-with-react/images/hero.png',
    url: 'https://blog.openreplay.com/infinite-select-dropdown-select-component-with-react/',
    platform: 'Open Replay',
    description:
      'Implementing select dropdown components that can deal with huge datasets is not trivial, and this article will show you how to go about it, avoiding performance problems and providing a slick user experience.',
  },
  {
    name: 'My Fourth Year in Tech and University: A Holistic Review',
    bgImage:
      'https://cdn.hashnode.com/res/hashnode/image/upload/v1703835610973/cf4fb56b-1ba2-4400-b409-308a08942d00.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp',
    url: 'https://blog.stephcrown.com/my-fourth-year-in-tech-and-university-a-holistic-review',
    platform: 'Hashnode',
    description:
      'This piece is a candid reflection on my journey through tech and academia, filled with ups, downs, and invaluable lessons learned along the way.',
  },
  {
    name: '8 Ways Variables Are Declared in JavaScript',
    bgImage: WaysVariablesAreDeclared,
    url: 'https://blog.stephcrown.com/8-ways-variables-are-declared-in-javascript',
    platform: 'Hashnode',
    description:
      'It is more common to say that we can declare variables in three ways, using var, let, or const. But there are even more ways to do this :)',
  },
  {
    name: 'How to Build an Application with ClojureScript',
    bgImage: BuildingWithClojureScript,
    url: 'https://blog.stephcrown.com/building-an-application-with-clojurescript',
    platform: 'Hashnode',
    description: 'Learn how to create a new ClojureScript project, and how to build a simple application with it.',
  },
  {
    name: 'How to Set up A ClojureScript and Phoenix Project',
    bgImage: SetupClojureScriptAndPhoenix,
    url: 'https://blog.stephcrown.com/how-to-set-up-a-clojurescript-and-phoenix-project',
    platform: 'Hashnode',
    description: 'Learn how to set up a ClojureScript and Phoenix project, and how to build a simple application with it.',
    hasLightBg: true,
  },
  {
    name: 'Writing Better Commit Messages',
    bgImage: WritingBetterCommits,
    url: 'https://stephcrown.hashnode.dev/writing-better-commit-messages',
    platform: 'Hashnode',
    description: 'Learn what commit messages are, and how to write commit messages in a consistent, readable way.',
    hasLightBg: true,
  },
  {
    name: 'How to make your web app work offline with just HTML, CSS, and JavaScript.',
    bgImage: MakeWebAppWorkOffline,
    url: 'https://stephcrown.hashnode.dev/how-to-make-your-web-app-work-offline-with-just-html-css-and-javascript',
    platform: 'Hashnode',
    description: 'Learn how to use service workers to ensure that users can access our web app even after going offline.',
    hasLightBg: true,
  },
  {
    name: 'Transitioning from React Router v5 to v6',
    bgImage: TransitionFromReactRouter,
    url: 'https://stephcrown.hashnode.dev/transitioning-from-react-router-v5-to-v6',
    platform: 'Hashnode',
    description: 'Explore what is new in React-router v6 and how to upgrade an existing React project from v5 to v6.',
  },
  {
    name: 'Commonly Confused Terms in Programming',
    bgImage: CommonlyConfusedTerms,
    url: 'https://stephcrown.hashnode.dev/commonly-confused-terms-in-programming',
    platform: 'Hashnode',
    description: 'Learn the difference between some commonly confused terms in programming.',
  },
  {
    name: "Let's Differentiate UX From UI",
    bgImage: DifferentiateUXFromUI,
    url: 'https://stephcrown.hashnode.dev/lets-differentiate-ux-from-ui',
    platform: 'Hashnode',
    description: 'Learn the difference between UX and UI, and how they work together to create a great product.',
  },
]

export default ARTICLE_LIST

// Export structured data for articles
export const ARTICLE_STRUCTURED_DATA = ARTICLE_LIST.map((article) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: article.name,
  description: article.description,
  url: article.url,
  image: article.bgImage,
  author: {
    '@type': 'Person',
    name: 'Stephen Emmanuel',
    alternateName: 'Steph Crown',
  },
  publisher: {
    '@type': 'Organization',
    name: article.platform,
    logo: {
      '@type': 'ImageObject',
      url: 'https://stephcrown.com/stephcrown.png',
    },
  },
}))
