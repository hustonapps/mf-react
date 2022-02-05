# Module Federation Example

## To Test

- Clone repo
- `yarn` (`npm i -g yarn` if yarn not installed)
- `yarn start`

This should start three different apps:

- :3000 host-app (main application tying everything together)
- :3001 app2 (secondary, independently implemented application)
- :3002 ui-components (simulates a UI component library, for now it just has a button)

Changes made in app2 or ui-components can be updated in host-app simply by refreshing (hot-reloading not working yet);
