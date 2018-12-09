import React from 'react'
import { storiesOf } from '@storybook/react'
import Dropdown from '../../src/Dropdown'

storiesOf('Dropdown', module)
  .add('Example', () => {
    class DropdownState extends React.Component {
      constructor () {
        super()

        this.state = {
          selectedItem: '',
        }
      }

      render () {
        const {
          selectedItem,
        } = this.state

        return (
          <div>
            <Dropdown
              name="drops"
              placeholder="Select"
              selectedItem={selectedItem}
              onChange={val => (
                this.setState({ selectedItem: val })
              )}
              items={[
                { key: 'hey', text: 'Hey boi' },
                { key: 'a', text: 'aaaa' },
                { key: 'b', text: 'bbbb' },
              ]}
              round
            />

            <p>{selectedItem}</p>
          </div>
        )
      }
    }

    return <DropdownState />
  })
