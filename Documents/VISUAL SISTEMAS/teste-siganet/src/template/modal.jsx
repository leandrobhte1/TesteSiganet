import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

export default props => (
    <Modal trigger={<Button className="btMenu">{props.name}</Button>} closeIcon>
    <Header icon='warning circle' content={props.titulo} />
    <Modal.Content>
      <p>
        {props.conteudo}
      </p>
    </Modal.Content>
    <Modal.Actions>
      <Button color='red'>
        <Icon name='remove' /> Não
      </Button>
      <Button color='green'>
        <Icon name='checkmark' /> Sim
      </Button>
    </Modal.Actions>
  </Modal>
)