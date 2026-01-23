import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { CircleLoader } from "react-spinners";

export type ScreenshotZoomCardProps = {
  title: string;
  src: string;
  alt: string;
};

const loaderColor = "#10b5cb";

const loaderStyle: CSSProperties = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

const getFullSizeSrc = (src: string) => src.replace(/(\.[a-zA-Z0-9]+)$/, "_xl$1");

export const ScreenshotZoomCard = ({ title, src, alt }: ScreenshotZoomCardProps) => {
  const [isThumbLoading, setIsThumbLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalLoading, setIsModalLoading] = useState(false);

  const fullSizeSrc = getFullSizeSrc(src);

  const openModal = () => {
    setIsModalOpen(true);
    setIsModalLoading(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (!isModalOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  return (
    <>
      <div className="my-6 rounded-xl border border-border bg-muted/20 p-4">
        <div className="mb-2 font-semibold">{title}</div>
        <button
          type="button"
          className="group w-full cursor-zoom-in overflow-hidden rounded-lg border border-border/60 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          aria-label={`Open full-size screenshot: ${title}`}
          onClick={openModal}
        >
          <div className="relative min-h-[200px] bg-muted/10">
            {isThumbLoading && (
              <CircleLoader
                color={loaderColor}
                loading={isThumbLoading}
                cssOverride={loaderStyle}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            )}
            <img
              src={src}
              alt={alt}
              className={`h-auto w-full transition duration-200 group-hover:scale-[1.01] ${
                isThumbLoading ? "opacity-0" : "opacity-100"
              }`}
              loading="lazy"
              onLoad={() => setIsThumbLoading(false)}
              onError={() => setIsThumbLoading(false)}
            />
          </div>
        </button>
      </div>
      {isModalOpen && typeof document !== "undefined"
        ? createPortal(
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
              role="dialog"
              aria-modal="true"
              aria-label={title}
              onClick={closeModal}
            >
              <div
                className="relative max-h-[95vh] max-w-[95vw]"
                onClick={(event) => event.stopPropagation()}
              >
                <button
                  type="button"
                  className="absolute right-2 top-2 rounded-full bg-background/80 p-2 text-foreground shadow-md transition hover:bg-red-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  aria-label="Close image viewer"
                  onClick={closeModal}
                >
                  <X className="h-4 w-4" />
                </button>
                {isModalLoading && (
                  <CircleLoader
                    color={loaderColor}
                    loading={isModalLoading}
                    cssOverride={loaderStyle}
                    size={150}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                  />
                )}
                <img
                  src={fullSizeSrc}
                  alt={alt}
                  className={`h-auto max-h-[95vh] max-w-[95vw] object-contain ${
                    isModalLoading ? "opacity-0" : "opacity-100"
                  }`}
                  onLoad={() => setIsModalLoading(false)}
                  onError={() => setIsModalLoading(false)}
                />
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
};

