import React, { useState, useRef } from "react";
import { PlusCircle, X } from "lucide-react";

const MAX_IMAGES = 3;
const MAX_FILE_SIZE_MB = 5;

const UploadPage = () => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");
  const [caption, setCaption] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const fileInputRef = useRef(null);

  const handleImageUpload = (files) => {
    setError("");

    const validFiles = Array.from(files).filter((file) => {
      if (file.size / 1024 / 1024 > MAX_FILE_SIZE_MB) {
        setError(`Each image must be under ${MAX_FILE_SIZE_MB}MB.`);
        return false;
      }
      return true;
    });

    if (images.length + validFiles.length > MAX_IMAGES) {
      setError(`You can upload a maximum of ${MAX_IMAGES} images.`);
      return;
    }

    const newImages = validFiles.map((file) => ({
      url: URL.createObjectURL(file),
      id: Math.random().toString(36).substr(2, 9),
    }));

    setImages((prev) => [...prev, ...newImages].slice(0, MAX_IMAGES));
  };

  const handleDrop = (e) => {
    e.preventDefault();
    handleImageUpload(e.dataTransfer.files);
  };

  const handleRemoveImage = (id) => {
    setImages((prev) => prev.filter((img) => img.id !== id));
  };

  const openFilePicker = () => {
    if (images.length < MAX_IMAGES) {
      fileInputRef.current.click();
    } else {
      setError(`Maximum ${MAX_IMAGES} images allowed.`);
    }
  };

  const countWords = (text) => text.trim().split(/\s+/).filter(Boolean).length;

  const handlePost = () => {
    if (countWords(caption) > 20) {
      setError("Caption must be 20 words or fewer.");
      return;
    }
    if (countWords(category) > 2) {
      setError("Category must be 2 words or fewer.");
      return;
    }
    if (!price || isNaN(price)) {
      setError("Price must be a number.");
      return;
    }

    setError("");
    const postData = {
      images,
      caption,
      category,
      price,
    };

    console.log("Post submitted:", postData);
    alert("Post submitted! (check console)");

    // Reset form (optional)
    setImages([]);
    setCaption("");
    setCategory("");
    setPrice("");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-6">
      {error && <div className="text-red-500 mb-3">{error}</div>}

      {/* Image Boxes with drag-and-drop */}
      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        className="grid grid-cols-3 gap-4 mb-8 w-full max-w-3xl"
      >
        {[0, 1, 2].map((i) => {
          const img = images[i];
          return (
            <div
              key={i}
              className="relative w-full aspect-square bg-white border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center overflow-hidden group"
            >
              {img ? (
                <>
                  <img
                    src={img.url}
                    alt={`Uploaded ${i}`}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => handleRemoveImage(img.id)}
                    className="absolute top-1 right-1 bg-black bg-opacity-50 rounded-full p-1 hover:bg-opacity-75 transition"
                  >
                    <X className="text-white h-4 w-4" />
                  </button>
                </>
              ) : (
                <span className="text-gray-300 text-sm text-center px-4">
                  Drag & drop or click + to upload
                </span>
              )}
            </div>
          );
        })}
      </div>

      {/* Upload Button */}
      <button
        onClick={openFilePicker}
        className="flex flex-col items-center justify-center cursor-pointer mb-6"
        disabled={images.length >= MAX_IMAGES}
      >
        <PlusCircle size={80} className="text-gray-500 hover:text-gray-700 transition" />
        <p className="text-sm text-gray-500 mt-1">
          Click or drag & drop to upload (max {MAX_IMAGES}, {MAX_FILE_SIZE_MB}MB each)
        </p>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          multiple
          onChange={(e) => handleImageUpload(e.target.files)}
          className="hidden"
        />
      </button>

      {/* Extra Details Form */}
      {images.length > 0 && (
        <div className="w-full max-w-md bg-white rounded-lg shadow p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Caption (max 20 words)
            </label>
            <textarea
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              rows={2}
              className="w-full border rounded p-2 text-sm focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter caption..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category (max 2 words)
            </label>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border rounded p-2 text-sm focus:outline-none focus:ring focus:border-blue-300"
              placeholder="e.g. Travel, Nature"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Price (₹)
            </label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full border rounded p-2 text-sm focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter price"
            />
          </div>

          <button
            onClick={handlePost}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
          >
            Post
          </button>
        </div>
      )}
    </div>
  );
};

export default UploadPage;
