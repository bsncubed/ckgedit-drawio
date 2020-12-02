/** whoot
 * A Basic plugin that inserts a draw.io file string into the editor. to open the file, save the dokuwiki
 *
 * Created out of the CKEditor Plugin SDK:
 * http://docs.ckeditor.com/#!/guide/plugin_sdk_intro
 */
 
// Register the plugin within the editor.
CKEDITOR.plugins.add( 'drawio', {
 
        // Register the icons. They must match command names.
        icons: 'drawio',
        lang: 'en',
       
        // The plugin initialization logic goes inside this method.
        init: function( editor ) {
       
                // Define the editor command that inserts a timestamp.
                editor.addCommand( 'insertDrawio', {
 
                        // Define the function that will be fired when the command is executed.
					exec: function( editor ) {
						const params = (new URL(document.location)).searchParams;
						let id = params.get('id');
						const idArr = id.split(':');
						id = idArr[0] + '-' +idArr[1];
						urlString = '{{drawio>' + id + ':diagram1}}';
						editor.insertHtml(urlString.toLocaleString());
						
					}
                });
 
                // Create the toolbar button that executes the above command.
                editor.ui.addButton( 'Drawio', {
                        label: editor.lang.drawio.title, //'Insert diargam.net document',
                        command: 'insertDrawio',
                        toolbar: 'insert',        
            icon: this.path + 'icons/drawio.png',          
                });
        }
});
 