import React from 'react'
import { Accordion, Icon, Header, Embed } from 'semantic-ui-react'

class Projects extends React.Component {
  state = { activeIndex: 10 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render(){
    const { activeIndex } = this.state
    return (
      <Accordion fluid>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={this.handleClick}
        >
          <Header as='h4' textAlign='center'>
            <Icon circular name='react' />
            <Header.Content>React Projects.</Header.Content>
          </Header>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <Embed
          autoplay={true}
          color='white'
          iframe={{
            allowFullScreen: true,
            style: {
              padding: 10,
            },
          }}
            url='https://would-you-rather-lac.vercel.app'
          />
        </Accordion.Content>
        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={this.handleClick}
        >
          <Header as='h4'>
            <Icon circular >D</Icon>
            <Header.Content>Django Projects.</Header.Content>
          </Header>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <p>
          “Django pluggable app where user can upload pdf/ppt files and search them with
          title or content in them
          https://github.com/mfragab5890/ayen-drive.git - https://ayendrive.herokuapp.com/”
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 2}
          index={2}
          onClick={this.handleClick}
        >
          <Header as='h4'>
            <Icon circular name='flask' />
            <Header.Content>Flask Projects.</Header.Content>
          </Header>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <p>
            Flask.
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 3}
          index={3}
          onClick={this.handleClick}
        >
        <Header as='h4'>
          <Icon circular name='node js' />
          <Header.Content>NodeJs Projects.</Header.Content>
        </Header>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 3}>
          <p>
            NodeJs.
          </p>
          <p>

          </p>
        </Accordion.Content>
      </Accordion>
    )
  }
}



export default Projects
