import { Editor } from "@tinymce/tinymce-react";
import { useRef } from "react";
import type { Editor as TinyMCEEditorType } from "tinymce";
import { formDataType } from "./AddBlog";

type Props = {
  formData: formDataType;
  setFormData: React.Dispatch<
    React.SetStateAction<formDataType>
  >;
};

const MyEditor = ({ formData, setFormData }: Props) => {
  const editorRef = useRef<TinyMCEEditorType | null>(null);

  return (
    <div className='w-[800px] mt-3'>
      <Editor
        apiKey={import.meta.env.VITE_TINY_MCE_API_KEY}
        onInit={(_evt, editor) => {
          editorRef.current = editor;
        }}
        value={formData.description} // bind to description not content
        onEditorChange={(newContent) =>
          setFormData((prev) => ({ ...prev, description: newContent }))
        }
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "help",
            "wordcount",
          ],
          toolbar:
            "undo redo | blocks | " +
            "bold italic preview code lists link | forecolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
        }}
      />
    </div>
  );
};

export default MyEditor;
