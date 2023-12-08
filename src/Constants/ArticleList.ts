/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable quotes */
import {
  BuildingAppWithClojureScript,
  CommonlyConfusedTerms,
  DifferentiateUXFromUI,
  SetupClojureScriptAndPhoenix,
  TransitionFromReactRouter,
  WaysVariablesAreDeclared,
  WritingBetterCommits,
} from 'Assets/Pngs'

import { ArticleType } from 'Types'

const ARTICLE_LIST: ArticleType[] = [
  {
    name: '8 Ways Variables Are Declared in JavaScript',
    bgImage: WaysVariablesAreDeclared,
    url: 'https://blog.stephcrown.com/8-ways-variables-are-declared-in-javascript',
    platform: 'Hashnode',
    description:
      'It is more common to say that we can declare variables in three ways, using var, let, or const. But there are even more ways to do this :)',
  },
  {
    name: 'Building an Application with ClojureScript',
    bgImage: BuildingAppWithClojureScript,
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
    bgImage: WritingBetterCommits,
    url: 'https://stephcrown.hashnode.dev/writing-better-commit-messages',
    platform: 'Hashnode',
    description: 'Learn what commit messages are, and how to write commit messages in a consistent, readable way.',
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
