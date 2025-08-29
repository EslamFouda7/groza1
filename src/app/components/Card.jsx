import { FaExternalLinkAlt } from "react-icons/fa";

function Card({ img, title, className, overlay, link, showIcon = false }) {
  const isVideo = img.endsWith(".mp4");

  return (
    <div className={`card mb-10 rounded-2xl max-w-sm overflow-hidden ${className}`}>
      <div className="rounded-lg overflow-hidden shadow-md">
        {isVideo ? (
          <video
            src={img}
            controls
            className="rounded-2xl w-full h-auto max-h-[250px] object-contain"
          />
        ) : (
          <img
            src={img}
            alt={title || ""}
            className="rounded-2xl w-full h-60 "
          />
        )}
      </div>

      {/* الـ overlay يشتغل للصور بس */}
      {!isVideo && (
        <div className={`${overlay}`}>
          {title && <p className="p-6 text-2xl md:text-3xl text-center">{title}</p>}
          {showIcon && link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-[#00B8CC] p-5 rounded-full text-2xl flex items-center gap-2 bg-white hover:text-cyan-300 transition"
            >
              <FaExternalLinkAlt />
            </a>
          )}
        </div>
      )}
    </div>
  )
}

export default Card;
