import Link from "next/link";

export const CallToActionButton = ({ buttonLabel, destination, align="left" }) => {
    // For tailwind classes
    const alignMap = {
        left: "text-left",
        center: "text-center",
        right: "text-right"
    }
    return <div className={alignMap[align]}>
        <Link href={destination}>
        <a className="wp-block-button__link">{buttonLabel}</a>
    </Link>
    </div>;
}