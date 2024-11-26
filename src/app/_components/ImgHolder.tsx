type ImgHolderProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
};

export default function ImgHolder({
  src,
  alt,
  width,
  height,
  className,
}: ImgHolderProps) {
  return (
    <div className={`bg-gray-100 ${className || ''}`}>
      <img
        src={src}
        alt={alt}
        className="object-cover"
        style={{
          width: `${width}px`,
          height: `${height}px`,
        }}
      />
    </div>
  );
}
