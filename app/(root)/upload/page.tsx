"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import FileInput from "@/components/FileInput";
import FormField from "@/components/FormField";
import { useFileInput } from "@/lib/hooks/useFileInput";
import { MAX_THUMBNAIL_SIZE, MAX_VIDEO_SIZE } from "@/constants";

const UploadPage = () => {
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    visibility: "public",
  });
  const video = useFileInput(MAX_VIDEO_SIZE);
  const thumbnail = useFileInput(MAX_THUMBNAIL_SIZE);

  const [error, setError] = useState('');

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleSubmit = async (e: FormEvent) =>  {
    e.preventDefault()

    setIsSubmiting(true)
    try {
        if(!video.file || !thumbnail.file){
            setError('Please upload video and thumbnail')
            return;
        }
        if(!formData.title || !formData.description){
            setError('Please fill in all the details')
            return;
        }

        

    } catch (error) {
        console.log('Error submitting form:', error)
    } finally {
        setIsSubmiting(false)
    }
  }
  return (
    <main className="wrapper-md upload-page">
      <h1>Upload a video</h1>
      {error && <div className="error-field">{error}</div>}
      <form className="rounded-20 shadow-10 gap-6 w-full flex flex-col px-5 py-7.5" onSubmit={handleSubmit}>
        <FormField
          id="title"
          label="Title"
          value={formData.title}
          onChange={handleInputChange}
          placeholder="Enter a clear and concise video title"
          as="input"
        />
        <FormField
          id="description"
          label="description"
          value={formData.description}
          placeholder="Describe what this video is about"
          onChange={handleInputChange}
          as="textarea"
        />
        <FileInput
          id="video"
          label="video"
          accept="video/*"
          file={video.file}
          previewUrl={video.previewUrl}
          inputRef={video.inputRef}
          onChange={video.handleFileChange}
          onReset={video.resetFile}
          type="video"
        />

        <FileInput
          id="thumbnail"
          label="thumbnail"
          accept="thumbnail/*"
          file={thumbnail.file}
          previewUrl={thumbnail.previewUrl}
          inputRef={thumbnail.inputRef}
          onChange={thumbnail.handleFileChange}
          onReset={thumbnail.resetFile}
          type="image"
        />
        <FormField
          id="visibility"
          label="visibility"
          value={formData.visibility}
          as="select"
          options={[
            { value: "public", label: "Public" },
            { value: "private", label: "Private" },
          ]}
          onChange={handleInputChange}
        />
        <button type="submit" disabled={isSubmiting} className="submit-button">
          {isSubmiting ? "Uploading..." : "Upload video"}
        </button>
      </form>
    </main>
  );
};
export default UploadPage;
