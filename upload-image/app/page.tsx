import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
        <Link href="/upload-image">Upload button</Link>
        <Link href="/upload-dnd">Upload drug n drop</Link>
    </main>
  )
}
