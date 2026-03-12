import Link from "next/link";
import Image from "next/image";

interface Props {
    title: string;
    author: string;
    coverURL: string;
    slug: string;
}

export const BookCard = ({
    title,
    author,
    coverURL,
    slug,
}: Props) => {
  return (
    <Link href={`/books/${slug}`}>
        <article className="book-card">
            <figure className="book-card-figure">
                <div className="book-card-cover-wrapper">
                    <Image 
                        src={coverURL} 
                        alt={title} 
                        width={133} 
                        height={200} 
                        className="book-card-cover" 
                    />
                </div>

                <figcaption className="book-card-meta">
                    <h3 className="book-card-title">{title}</h3>
                    <p className="book-card-author">{author}</p>
                </figcaption>
            </figure>
        </article>
    </Link>
  )
}
