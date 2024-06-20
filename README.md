# Hahow Frontend Engineer Pretest Project

## How to start ?

1. Install [Node.js](https://github.com/nodejs/node). This project is currently using node version 21.6.0.
2. Clone from the [repository](https://github.com/asliceofpizza007/hahow-fe-pretest).
3. Check out to the project directory.
  ```terminal
  user [any]> cd ./hahow-fe-pretest
  user [any/hahow-fe-pretest]>
  ```
4. Command `npm install` to install all dependencies.
5. After all dependencies is installed, command `npm run dev` to start local server.
6. Click the link showed on the terminal and you'll be able to see the running project.
7. Checkout my gitPage [online demo](https://asliceofpizza007.github.io/hahow-fe-pretest).

## Tech Stacks
1. [**Vite**](https://vitejs.dev/): Vite (pronounced "veet") is a modern web development tool that aims to provide a faster and more efficient development experience. It's a build tool that helps you develop and build web applications quickly and easily.
  * Fast Development Cycle
  * Native ES Modules
  * Simplified Configuration
  * Large Community and Plugin Ecosystem
  * Seamless Integration
2. [**React**](reactjs.org/): React is a free and open-source JavaScript library for building user interfaces.
  * Reusable UI Components
  * Efficient and Fast
  * Scalable and Flexible
  * Large Community and Plugin Ecosystem
  * Constantly Evolving
3. [**TypeScript**](https://www.typescriptlang.org/): TypeScript is a statically typed, free and open-source programming language developed by Microsoft.
  * Improved Code Quality
  * Better Code Completion
  * Enhanced Code Readability
  * Faster Development
  * Interoperability with JavaScript
4. [**@tanstack/react-router**](https://tanstack.com/router/latest): @tanstack/react-router is a React library for managing routing in React applications.
  * 100% inferred TypeScript support
  * Type safe navigation
  * Nested Routing and layout routes
  * Built-in Route Loaders w/ SWR Caching
  * Designed for client-side data caches (TanStack Query, SWR, etc.)
  * Automatic route prefetching
  * Asynchronous route elements and error boundaries
  * File-based Route Generation
  * Type safe JSON-first Search Params state management APIs
  * Path and Search Parameter Schema Validation
  * Search Param Navigation APIs
  * Custom Search Param parser/serializer support
  * Search param middleware
  * Route matching/loading middleware
5. [**@tanstack/react-query**](https://tanstack.com/query/latest): TanStack Query (FKA React Query) is often described as the missing data-fetching library for web applications, but in more technical terms, it makes fetching, caching, synchronizing and updating server state in your web applications.
  * Caching... (possibly the hardest thing to do in programming)
  * Deduping multiple requests for the same data into a single request
  * Updating "out of date" data in the background
  * Knowing when data is "out of date"
  * Reflecting updates to data as quickly as possible
  * Performance optimizations like pagination and lazy loading data
  * Managing memory and garbage collection of server state
  * Memoizing query results with structural sharing
6. [**TailwindCSS**](https://tailwindcss.com/): Tailwind CSS is a utility-first CSS framework which provides several of these opinionated, single-purpose utility classes that you can use directly inside your markup to design an element.
  * Simplify the development process
  * Efficient design with minimal code
  * Flexibility and customizability
  * Optimize your projects with integration and tooling
7. [**Tailwind-Merge**](https://github.com/dcastil/tailwind-merge):  Tailwind merge is a package that automatically resolves Tailwind CSS class conflicts.
8. [**Class-Variance-Authority**](https://cva.style/docs): cva is a friendly helper that facilitates the design and management of your component's diverse contexts.
9. [**Zod**](https://zod.dev/): Zod is a TypeScript-first schema declaration and validation library.
  * Zero dependencies
  * Works in Node.js and all modern browsers
  * Tiny: 8kb minified + zipped
  * Immutable: methods (e.g. .optional()) return a new instance
  * Concise, chainable interface
  * Functional approach: parse, don't validate
  * Works with plain JavaScript too! You don't need to use TypeScript.
10.  [**GSAP**](https://gsap.com/): GSAP is an industry standard JavaScript animation library from GreenSock that lets you craft high-performance animations that work in every major browser.
11.  [**useGSAP**](https://gsap.com/resources/React/): useGSAP is a drop-in replacement React hook for `useEffect` or `useLayoutEffect` that automatically handles cleanup using gsap.context().
12.  [**Split-Type**](https://github.com/lukePeavey/SplitType#readme): SplitType is a small javascript library that splits HTML text into elements so that lines, words, and characters can be animated independently.

## Architecture
* [Operating diagram](https://app.eraser.io/workspace/UuuHZcbPg7B56HB3mOmC?origin=share)
* Folder architecture
  ```
  ├── src
  │   ├── api                     // api related 
  │   │   ├── index.ts
  │   │   └── schema.ts
  │   ├── components              // reusable components
  │   │   ├── button
  │   │   ├── card
  │   │   ├── counter
  │   │   ├── header
  │   │   ├── input
  │   │   └── index.ts
  │   ├── routes                  // file-based routes for @tanstack/react-query
  │   │   ├── heroes
  │   │   │   ├── $heroId.lazy.tsx
  │   │   │   └── $heroId.tsx
  │   │   ├── __root.tsx
  │   │   ├── hero.lazy.tsx
  │   │   ├── hero.tsx
  │   │   └── index.tsx
  │   ├── utils                   // utility functions
  │   │   └── index.tsx
  │   ├── index.css               // entry for tailwindCSS
  │   ├── main.tsx                // entry for React
  │   ├── routeTree.gen.ts        // Auto generate by @tanstack/react-router
  │   └── vite-env.d.ts
  
  ```
## How I build the project with the solution I picked ?
* All the principles of my development are based on the SOLID design principles.
* Since there's no complex state needs to be well handling, the state management solution won't be necessary.If it does, I would choose [Zustand](https://github.com/pmndrs/zustand), it's much more light-weight and easy to set up.
* With the combo of using Vite, React, TypeScript, it helps a lot for my DX.
* With the choices of both @tanstack libraries:
  * Both of these two libraries have great TypeScript support.
  * React-router's file-based routing handles my routes perfectly and for its build-in loader, validate search and other functionalities as well.
  * Fetching in React used to be a pain in the ass, React-query handles them very well with the revalidate policy and other stuffs.
* Zod makes our API response data type safe. If I like to go further, I'll introduce to use [ts-rest](https://ts-rest.com/) as well to make sure the whole fetching operation is type safe.
* With the combo of using TailwindCSS, Tailwind-Merge and CVA, it abstracts most of the UI logic and improves the maintainability.
* Lastly, GSAP makes it easier to build a eye-catching animation to our project.

## Q&A
Q1: What's comment rule you apply? And in what kind of condition?
Ans: Actually, I barely write comment because I follow most of **Clean Code** develop guide. I'd like my naming to be meaningful. There's a case I would rather write command is that it happens to use a tricky way to achieve the result.
Q2: What's the difficulty you face during the development and how do you solve it?
Ans: I didn't encounter too many problems with coding. I had more problems with design because I'm lacking personal aesthetics.
So when writing styles, I referred more to design styles on **CodePen** and **Pinterest** and replicated them myself.