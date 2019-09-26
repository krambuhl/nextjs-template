import { storiesOf } from '@storybook/react'
import { Menu } from '@molecules'
import { AppContext } from '@contexts'
import { Centered } from '@decorators'

storiesOf('Menu', module)
  .addDecorator(Centered)
  .add('default', () => (
    <AppContext.Provider value={{
      "menu": [
        {
          "id": 117,
          "title": "About",
          "slug": "about"
        },
        {
          "id": 119,
          "title": "Work",
          "slug": "work"
        },
        {
          "id": 665,
          "title": "Store",
          "slug": "store"
        }
      ],
    }}>
      <Menu />
    </AppContext.Provider>
  ))
