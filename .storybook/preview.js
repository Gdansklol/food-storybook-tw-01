// /** @type { import('@storybook/react').Preview } */
// const preview = {
//   parameters: {
//     actions: { argTypesRegex: "^on[A-Z].*" },
//     controls: {
//       matchers: {
//         color: /(background|color)$/i,
//         date: /Date$/,
//       },
//     },
//   },
// };

// export default preview;

import "../src/styles/tailwind.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
}
