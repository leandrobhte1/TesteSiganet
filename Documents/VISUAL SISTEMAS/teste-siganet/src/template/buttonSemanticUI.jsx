import React from 'react'
import { Divider, Radio, Rating, Grid, Dimmer, Loader, Image, Segment, Button, Icon } from 'semantic-ui-react'

const ButtonExampleAnimated = () => (
  <div>
    <Button animated>
      <Button.Content visible>Next</Button.Content>
      <Button.Content hidden>
        <Icon name='arrow right' />
        
      </Button.Content>
    </Button>
    <Button icon="filter" />
    <Icon loading name='spinner' />
    <Button animated='vertical'>
      <Button.Content hidden>Shop</Button.Content>
      <Button.Content visible>
        <Icon name='shop' />
      </Button.Content>
    </Button>
    <Segment>
      <Dimmer active inverted>
        <Loader size='large'>Loading</Loader>
      </Dimmer>

      <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
    </Segment>
    <Segment>
    <Grid columns={2} relaxed='very'>
      <Grid.Column>
        <p>
          <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
        </p>
        <p>
          <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
        </p>
        <p>
          <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
        </p>
        <p>
          <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
        </p>
      </Grid.Column>
      <Grid.Column>
        <p>
          <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
        </p>
        <p>
          <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
        </p>
        <p>
          <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
        </p>
        <p>
          <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
        </p>
      </Grid.Column>
    </Grid>

    <Divider vertical>Or</Divider>
  </Segment>
  <Rating icon='heart' defaultRating={3} maxRating={5} />
  <Radio toggle label='Ativo' />

  </div>
)

export default ButtonExampleAnimated