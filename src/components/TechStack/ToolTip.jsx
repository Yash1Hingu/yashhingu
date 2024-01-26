export default function ToolTip({ imageIcon, name, alt }) {
    return (
        <div className="tooltip">
            <img src={imageIcon} alt={alt} />
            <span className="tooltiptext">{name}</span>
        </div>
    )
}