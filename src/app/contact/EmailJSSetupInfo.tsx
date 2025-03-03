export default function EmailJSSetupInfo() {
  return (
    <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
      <h3 className="text-lg font-medium text-amber-800 mb-3">EmailJS Setup Instructions</h3>
      <p className="text-amber-700 mb-4">
        To enable real email sending through EmailJS, follow these steps:
      </p>
      <ol className="list-decimal list-inside space-y-2 text-amber-700">
        <li><strong>Sign up</strong> for an account at <a href="https://www.emailjs.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">EmailJS.com</a></li>
        <li><strong>Create a service</strong> connected to your email provider (Gmail, Outlook, etc.)</li>
        <li><strong>Create an email template</strong> with these variables:
          <ul className="list-disc list-inside ml-4 mt-1">
            <li>from_name</li>
            <li>from_email</li>
            <li>from_company</li>
            <li>from_phone</li>
            <li>subject</li>
            <li>message</li>
            <li>interest</li>
          </ul>
        </li>
        <li><strong>Replace the placeholder values</strong> in the contact page with your actual Service ID, Template ID, and Public Key</li>
      </ol>
      <p className="text-amber-700 mt-4">
        After completing these steps, the contact form will send real emails to {`${process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'your designated email address'}`}.
      </p>
    </div>
  );
}