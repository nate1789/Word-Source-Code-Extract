// Call the ClassicEditor.create() method to display the editor.
ClassicEditor
    .create( document.querySelector( '#editor' ) )
    .catch( error => {
        console.error( error );
    } );


console.log('');