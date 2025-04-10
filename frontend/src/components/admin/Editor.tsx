import { Editor} from '@tinymce/tinymce-react';
import { useRef } from 'react';
import type { Editor as TinyMCEEditorType } from 'tinymce';

const MyEditor = () => {
  const editorRef = useRef<TinyMCEEditorType | null>(null);

  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  return (
    <div>
      <Editor
        apiKey={import.meta.env.VITE_TINY_MCE_API_KEY}
        onInit={(_evt: any, editor: any) => {
          editorRef.current = editor;
        }}
        initialValue="<p>This is the initial content of the editor.</p>"
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist',
            'autolink',
            'lists',
            'link',
            'image',
            'charmap',
            'preview',
            'anchor',
            'searchreplace',
            'visualblocks',
            'code',
            'fullscreen',
            'insertdatetime',
            'media',
            'table',
            'code',
            'help',
            'wordcount',
          ],
          toolbar:
            'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
        }}
      />
      <button onClick={log}>Log editor content</button>
    </div>
  );
};

export default MyEditor;
