export default function Contact() {
  return (
    <main className="container mx-auto px-6 py-16">
      <h1 className="text-display-lg font-light text-gray-900 mb-8">
        Contact Us
      </h1>
      <div id="form">{/* Add contact form */}</div>
      <div id="locations" className="mt-16">
        <h2 className="text-display-md font-light text-gray-900 mb-8">
          Our Locations
        </h2>
        <div id="dc">{/* DC office details */}</div>
        <div id="nairobi">{/* Nairobi office details */}</div>
        <div id="lagos">{/* Lagos office details */}</div>
      </div>
    </main>
  );
}
