# GoLinks Challenge - Frontend

**Task:** Create a user interface to navigate the repositories and commits in Netflix’s Github. As a User, I would like to be able to see a list of Netflix’s repositories, and when I click on a repository, I want to be able to see the list of commits.

**Status:** Deployed at [Vercel](https://golinks-challenge.vercel.app/)

## Things to Build On:

* Custom Styling
  * Cleaner links and data display
  * balance columns, make it more readable
  * Clean up flexbox spacing, add clearer breaks between blocks of text, use whitespace
  * customize MUI theme, particularly font sizes, rather than using variant=caption

* MUI Data Grid
  * Better sorting could allow for sorting by different categories
  * Clearer display with columns   

* Pagination
  * load all org data from github's repo list api, show loader while it's being collected into state.
  * Time loaders according to mui's UX guidelines (if 1 second+, user's flow has been interrupted, hide if <1s)

* UX Adjustments
  * better balance between left/right columns
  * mobile breakpoints
  * dark/light theme, or darkmode exclusive
  * readable timestamps, m/dd/yy h:mm zz
  * links to user profiles from commits
  * links in icons, styled without underlines
  * show gravatar/mini user badge

* State Management / Complexity
  * If the app were expanded, I would add Context or Redux as appropriate. Currently, there are only 2 child components, so no prop drilling is necessary.

* Cleanup
  * Take out clutter, unused components
  * more thorough linting
  * tests for all components
  * automated testing 
  
* Expansion/New Features/Shiny
  * make org changeable, ideally with an autocomplete  
  * automated testing on pre-commit hooks
  * sorting dynamically with mui DataGrid
  * git chart, or ways to explore each repo's commit tree
  * More visual differentiation
    * icons per language
    * theme colors
