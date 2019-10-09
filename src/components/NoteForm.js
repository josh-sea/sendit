import React, { useState, useEffect } from 'react';
import { Container,Form,TextArea,Button,Modal,Header,Icon,Dimmer,Loader } from 'semantic-ui-react'

function NoteForm() {
  const [textAreaControl, updateTextArea] = useState(localStorage.getItem('textDraft') || "");
  const [nameControl, updateName] = useState("");
  const [emailControl, updateEmail] = useState("");
  const [phoneControl, updatePhone] = useState("");
  const [loader, toggleLoader] = useState(false);
  const [loaderText, updateLoaderText] = useState('Sending...');
  const [modalOpen,toggleModal] = useState(false);
  useEffect(()=>{
    localStorage.setItem('textDraft',textAreaControl)
  })

  const handleSubmit = (e) => {
      updateTextArea("")
      updateName("");
      updateEmail("");
      updatePhone("");
      toggleLoader(true);
      setTimeout(()=>{updateLoaderText('Finishing up...')},3000);
      setTimeout(()=>{updateLoaderText('Sent!')},3000);
      setTimeout(()=>{toggleLoader(false)},5000);
      updateLoaderText('Sending...')
      toggleModal(false);
    }

  return (

  <Container>
  <Form>
    <Form.Group widths='equal'>
      <Form.Input fluid value={nameControl} onChange={(e)=>updateName(e.target.value)} label='Recipient'/>
      <Form.Input fluid value={emailControl} onChange={(e)=>updateEmail(e.target.value)} label='Email'/>
      <Form.Input fluid value={phoneControl} onChange={(e)=>updatePhone(e.target.value)} label='Phone'/>
    </Form.Group>
    <TextArea id='text-box' rows={20} value={textAreaControl} onChange={(e)=>updateTextArea(e.target.value)} placeholder='Spill your guts...' />
  </Form>
  {loader &&
    <Dimmer active>
      <Loader size='massive'>{loaderText}</Loader>
    </Dimmer>
  }
  <Modal
  trigger={<Button onClick={()=>{toggleModal(true)}}>Send It...</Button>}
  closeIcon
  open={modalOpen}
  dimmer='inverted'
  onClose={()=>{toggleModal(false)}}
  basic
  size='small'
>
  <Header content={`Send your message to ${nameControl}/the universe?`} />
  <Modal.Content>
    <h3>{textAreaControl}</h3>
  </Modal.Content>
  <Modal.Actions>
    <Button color='red' onClick={()=>{toggleModal(false)}} inverted>
      <Icon name='remove' /> Continue editing
    </Button>
    <Button color='green' onClick={handleSubmit} inverted>
      <Icon name='checkmark' /> Send It...
    </Button>
  </Modal.Actions>
</Modal>

  </Container>
)};

export default NoteForm;

const style = {
  textArea: {
    minHeight: '500',
  }
}
