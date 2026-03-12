import { Search } from "@/components/Search";
import { BookCard } from "@/components/BookCard"
import { HeroSection } from "@/components/HeroSection"

import { getAllBooks } from "@/lib/actions/book-actions"

interface Props {
  searchParams: Promise<{ query?: string }>;
}

const page = async ({ searchParams }: Props) => {
  const { query } = await searchParams;

  const bookResults = await getAllBooks(query);
  const books = bookResults.success ? bookResults.data ?? [] : [];

  return (
    <main className="wrapper container">
      <HeroSection />

      <div 
        className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 mb-10"
        >
          <h2 className="text-3xl font-serif font-bold text-[#212a3b]">Recent Books</h2>
          <Search />
      </div>

      <div className="library-books-grid">
          {books.map((book) => (
              <BookCard 
                key={book._id} 
                title={book.title} 
                author={book.author} 
                coverURL={book.coverURL} 
                slug={book.slug} 
              />
          ))}
      </div>
</main>
  )
}

export default page