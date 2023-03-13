import Link from "next/link";

export const ButtonLink = ({ destination, label }) => {
    <Link href={destination}>
        <a className="btn">{label}</a>
    </Link>
};