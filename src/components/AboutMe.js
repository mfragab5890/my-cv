import { Header, Image, List, Icon, Segment, Label } from 'semantic-ui-react'
import me from '../images/me.JPG'

const AboutMe = (props) => {
  return (
    <List>
      <List.Item>
        <Header as='h2' textAlign='center'>
          <Header.Content>Mostafa Fouad El-Sayed Ragab</Header.Content>
        </Header>
        <br />
      </List.Item>
      <List.Item>
        <List.Icon name='marker' />
        <List.Content>Sheikh Zayed city ∙ Egypt</List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name='mail' />
        <List.Content>
          <a href='mailto:m.f.ragab5890@gmail.com'>m.f.ragab5890@gmail.com</a>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name='linkedin' />
        <List.Content>
          <a href='https://www.linkedin.com/in/mostafa-fouad-ragab'>linkedin.com/in/mostafa-fouad-ragab</a>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name='github' />
        <List.Content>
          <a href='https://github.com/mfragab5890'>github.com/mfragab5890</a>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name='call' />
        <List.Content>
          (+20)1122221136
          <span class="or">  ||  </span>
          (+20)1111206636
        </List.Content>
      </List.Item>
      <br/>
      <List.Item>
        <List.Content>
          <Segment raised>
            <Label as='a' color='red' ribbon>
              Summary
            </Label>
            <span><hr style={{height:0.1, visibility:'hidden'}} />
            I want to invest my experience as a web developer with my years of experience as an industrial engineer in which I gained my problem-solving skills, data analysis, scientific thinking,
            team working, my passion for continuous development to be part of a team that contributes
            to building the future in a reputable company that aims to excellence
            and accomplish achievements.
            </span>
    </Segment>
        </List.Content>
      </List.Item>

    </List>
  )}

  export default AboutMe
