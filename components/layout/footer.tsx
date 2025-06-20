
export default function Footer() {
  return (
    <footer className="border-t border-neutral-300 py-4" >
      <div className="container mx-auto px-4">
        <p className="font-varta text-sm text-neutral-500 text-center">
          © {new Date().getFullYear()} Sophia Tam. All rights reserved.
        </p>
      </div>
    </footer >
  )
}
