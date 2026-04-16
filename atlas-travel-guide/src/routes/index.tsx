import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <main className="page-wrap px-4 pb-8 pt-14">
      <h1 className="mb-4 text-3xl font-bold">
        Welcome to the Atlas Travel Guide!
      </h1>
      <p className="mb-2 text-lg">
        Explore the world with us. Find travel guides, tips, and recommendations
        for your next adventure.
      </p>
      <p className="mb-2 text-lg">
        Use the navigation links above to browse through our collection of
        travel guides and learn more about different destinations around the
        globe.
      </p>
      <p className="mb-2 text-lg">
        Whether you're looking for a relaxing beach vacation, an exciting city
        break, or an adventurous hiking trip, we've got you covered!
      </p>
    </main>
  )
}
