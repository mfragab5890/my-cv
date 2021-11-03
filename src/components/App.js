import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Container, Menu, Grid, Segment, Image } from 'semantic-ui-react'
import me from '../images/me.JPG'
import Switcher from './Switcher'

class App extends React.Component {
  state = { activeItem: 'ABOUT ME' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })


  render(){
    const { activeItem } = this.state
    return (
      <div className="App">
        <Container fluid>
          <Grid celled='internally'>
            <Grid.Column width={4}>
              <Menu inverted pointing fluid vertical stackable left={'true'}>
                <Menu.Item>
                  <Image src={me} size='tiny' circular centered />
                </Menu.Item>
                <Menu.Item
                  name='ABOUT ME'
                  active={activeItem === 'ABOUT ME'}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name='EMPLOYMENT HISTORY'
                  active={activeItem === 'EMPLOYMENT HISTORY'}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name='EDUCATION'
                  active={activeItem === 'EDUCATION'}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name='CERTIFICATES & COURSES'
                  active={activeItem === 'CERTIFICATES & COURSES'}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name='SKILLS'
                  active={activeItem === 'SKILLS'}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name='PROJECTS'
                  active={activeItem === 'PROJECTS'}
                  onClick={this.handleItemClick}
                />
              </Menu>
            </Grid.Column>

            <Grid.Column stretched width={12}>
              <Segment>
                <Switcher activeItem = {activeItem}/>
              </Segment>
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    );
  };

}

export default App;
