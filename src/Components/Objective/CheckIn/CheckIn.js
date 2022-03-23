import React from 'react';
import StyleCheckIn from './StyleCheckIn';
import{Row,Col,Button} from 'react-bootstrap';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const CheckIn = ({setcheckInCanvas}) => {
  return (
    <StyleCheckIn>
        <div className='CheckIn-heading'>OBJECTIVE CHECK-IN: Be Proactive About Customer Success</div>
        <div className='CheckIn-date'>February 22, 2022</div>
        <Row className='mt-4'>
            <Col lg={2} >
                <div className='CheckIn-col-1-heading'>Executive Summary</div>
                <div className='CheckIn-col-1-heading'>Objective Status </div>
                <div className='CheckIn-col-1-heading '>Additional Detail</div>
            </Col>
            <Col lg={10} >
                <div className='CheckIn-col-2-heading'>Great start to the year!</div>
                <div className="d-flex justify-content-between">
                 <Button className='CheckIn-btn'>Really Off Track</Button>
                 <Button className='CheckIn-btn'>Off Track</Button>
                 <Button className='CheckIn-btn'>Going Okay</Button>
                 <Button className='CheckIn-btn'> On Track</Button>
                 <Button className='CheckIn-btn'>Really On Track</Button>
                </div>
                <div className='mt-5 CheckIn-editor'>
                <CKEditor
                    editor={ ClassicEditor }
                    data=""
                    config={{
                        toolbar:{ items: ['bold', 'italic', 'strikethrough', 'underline', 'subscript', 'superscript', '|','link', '|','bulletedList', 'numberedList', 'todoList','-', 'fontfamily', 'fontsize', 'fontColor', 'fontBackgroundColor', '|','code', 'codeBlock', '|','insertTable', '|','outdent', 'indent', '|', 'uploadImage', 'blockQuote', '|','undo', 'redo']}                        
                    }}
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />
                </div>

                <div className='d-flex justify-content-end mt-3 gap-3'>
                    <Button className='CheckIn-editor-cancelbtn'>Cancel</Button>
                    <Button onClick={() => setcheckInCanvas(false)} className='bg-dark'>Post Check-In</Button>
                </div>
            </Col>
        </Row>
    </StyleCheckIn>
  )
}

export default CheckIn 