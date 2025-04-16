
import { useState, ChangeEvent } from "react";
import { UploadCloud, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

interface ImageUploaderProps {
  onImageUpload: (file: File) => void;
  isLoading: boolean;
}

const ImageUploader = ({ onImageUpload, isLoading }: ImageUploaderProps) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [dragActive, setDragActive] = useState(false);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFile(file);
    }
  };

  const handleFile = (file: File) => {
    // Create preview URL
    const fileUrl = URL.createObjectURL(file);
    setPreviewUrl(fileUrl);
    // Pass file to parent component
    onImageUpload(file);
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const clearImage = () => {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
    setPreviewUrl(null);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {!previewUrl ? (
        <div
          className={`border-2 border-dashed rounded-lg p-8 flex flex-col items-center justify-center h-72 transition-all ${
            dragActive ? "border-primary bg-primary/5" : "border-border"
          }`}
          onDragEnter={handleDrag}
          onDragOver={handleDrag}
          onDragLeave={handleDrag}
          onDrop={handleDrop}
        >
          <UploadCloud className="h-12 w-12 text-muted-foreground mb-4" />
          <h3 className="text-lg font-medium mb-2">Drop your image here</h3>
          <p className="text-muted-foreground text-center mb-4">
            Upload any handmade product image for AI analysis
          </p>
          <div>
            <Button>
              <label htmlFor="file-upload" className="cursor-pointer">
                Select Image
                <input
                  id="file-upload"
                  type="file"
                  className="sr-only"
                  accept="image/*"
                  onChange={handleFileChange}
                  disabled={isLoading}
                />
              </label>
            </Button>
          </div>
        </div>
      ) : (
        <div className="relative">
          <Button
            variant="destructive"
            size="icon"
            className="absolute top-2 right-2 z-10"
            onClick={clearImage}
            disabled={isLoading}
          >
            <X className="h-4 w-4" />
          </Button>
          {isLoading && (
            <div className="absolute inset-0 bg-background/70 flex items-center justify-center">
              <div className="flex flex-col items-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-3"></div>
                <p className="text-sm text-muted-foreground">Analyzing image...</p>
              </div>
            </div>
          )}
          <img
            src={previewUrl}
            alt="Uploaded product"
            className="max-h-96 w-full object-contain rounded-lg"
          />
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
