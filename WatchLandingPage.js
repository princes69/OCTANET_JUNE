export default function Widget() {
    return (
      <>
        <div className="bg-zinc-900 text-zinc-300 min-h-screen flex flex-col items-center justify-center p-4">
          <div className="bg-zinc-800 rounded-lg shadow-lg p-8 max-w-4xl w-full mb-8">
            <h1 className="text-4xl lg:text-6xl font-bold text-blue-400 mb-4">Discover the Trend</h1>
            <p className="text-lg mb-6">A watch is a timepiece intended to be carried or worn by a person.</p>
            <button className="bg-blue-400 text-zinc-900 px-6 py-3 rounded-full flex items-center justify-center space-x-2">
              <span>Explore</span>
              <img src="https://placehold.co/20x20" alt="Arrow" className="inline-block" />
            </button>
            <img src="https://placehold.co/300x300" alt="Watch" className="mx-auto" />
          </div>
        </div>
  
        <div className="bg-zinc-100 text-zinc-900 min-h-screen flex flex-col items-center justify-center p-4">
          <div className="max-w-4xl w-full mb-8">
            <h2 className="text-3xl lg:text-5xl font-bold text-blue-400 mb-4">Main Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg shadow p-4 flex items-center justify-center flex-col">
                <img src="https://placehold.co/100x100" alt="Feature 1" className="mb-2" />
                <p className="text-lg">Feature Description 1</p>
              </div>
              <div className="bg-white rounded-lg shadow p-4 flex items-center justify-center flex-col">
                <img src="https://placehold.co/100x100" alt="Feature 2" className="mb-2" />
                <p className="text-lg">Feature Description 2</p>
              </div>
              <div className="bg-white rounded-lg shadow p-4 flex items-center justify-center flex-col">
                <img src="https://placehold.co/100x100" alt="Feature 3" className="mb-2" />
                <p className="text-lg">Feature Description 3</p>
              </div>
            </div>
          </div>
        </div>
  
        <div className="bg-zinc-900 text-zinc-300 min-h-screen flex flex-col items-center justify-center p-4">
          <div className="max-w-4xl w-full mb-8">
            <h2 className="text-3xl lg:text-5xl font-bold text-blue-400 mb-4">Product Showcase</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <img src="https://placehold.co/400x400" alt="Product 1" className="mb-2" />
                <p className="text-lg">Product Description 1</p>
              </div>
              <div>
                <img src="https://placehold.co/400x400" alt="Product 2" className="mb-2" />
                <p className="text-lg">Product Description 2</p>
              </div>
              <div>
                <img src="https://placehold.co/400x400" alt="Product 3" className="mb-2" />
                <p className="text-lg">Product Description 3</p>
              </div>
            </div>
          </div>
        </div>
  
        <div className="bg-zinc-100 text-zinc-900 min-h-screen flex flex-col items-center justify-center p-4">
          <div className="max-w-4xl w-full mb-8">
            <h2 className="text-3xl lg:text-5xl font-bold text-blue-400 mb-4">Product Images</h2>
          </div>
        </div>
  
        <div className="bg-zinc-900 text-zinc-300 min-h-screen flex flex-col items-center justify-center p-4">
          <div className="max-w-4xl w-full mb-8">
            <h2 className="text-3xl lg:text-5xl font-bold text-blue-400 mb-4">Demo Video</h2>
            <div className="aspect-w-16 aspect-h-9">
              <iframe src="https://www.youtube.com/watch?v=ues7UPwqBNs" title="Demo Video" className="w-full h-full" ></iframe>
            </div>
            <p className="text-lg mt-4">Watch the smartwatch in action!</p>
            <button className="bg-blue-400 text-zinc-900 px-6 py-3 rounded-full mt-4">Watch Now</button>
          </div>
        </div>
  
        <div className="bg-zinc-100 text-zinc-900 min-h-screen flex flex-col items-center justify-center p-4">
          <div className="max-w-4xl w-full mb-8">
            <h2 className="text-3xl lg:text-5xl font-bold text-blue-400 mb-4">Client Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg shadow p-4">
                <img src="https://placehold.co/50x50" alt="Client 1" className="rounded-full mb-2" />
                <p className="text-lg">"Great product, highly recommended!"</p>
                <p className="text-sm">- John Doe</p>
              </div>
              <div className="bg-white rounded-lg shadow p-4">
                <img src="https://placehold.co/50x50" alt="Client 2" className="rounded-full mb-2" />
                <p className="text-lg">"Love my new smartwatch, amazing features!"</p>
                <p className="text-sm">- Jane Smith</p>
              </div>
            </div>
          </div>
        </div>
  
        <div className="bg-zinc-900 text-zinc-300 min-h-screen flex flex-col items-center justify-center p-4">
          <div className="max-w-4xl w-full mb-8">
            <h2 className="text-3xl lg:text-5xl font-bold text-blue-400 mb-4">Interactive Preview</h2>
          </div>
        </div>
  
        <div className="bg-zinc-100 text-zinc-900 min-h-screen flex flex-col items-center justify-center p-4">
          <div className="max-w-4xl w-full mb-8">
            <h2 className="text-3xl lg:text-5xl font-bold text-blue-400 mb-4">Ready to Get Yours?</h2>
            <p className="text-lg mb-4">Explore our collection now!</p>
            <button className="bg-blue-400 text-zinc-900 px-6 py-3 rounded-full">Shop Now</button>
          </div>
        </div>
  
        <div className="bg-zinc-900 text-zinc-300 min-h-screen flex flex-col items-center justify-center p-4">
          <div className="max-w-4xl w-full mb-8">
            <h2 className="text-3xl lg:text-5xl font-bold text-blue-400 mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-lg mb-4">Stay updated with the latest news and promotions!</p>
            <form className="flex items-center justify-center">
              <input type="email" placeholder="Enter your email" className="bg-white px-4 py-2 rounded-l-lg" />
              <button type="submit" className="bg-blue-400 text-zinc-900 px-6 py-2 rounded-r-lg">Subscribe</button>
            </form>
          </div>
        </div>
  
        <div className="bg-zinc-100 text-zinc-900 min-h-screen flex flex-col items-center justify-center p-4">
          <div className="max-w-4xl w-full mb-8">
            <h2 className="text-3xl lg:text-5xl font-bold text-blue-400 mb-4">Technical Specifications</h2>
            <table className="w-full border-collapse border border-zinc-300">
              <tbody>
                <tr>
                  <td className="border border-zinc-300 px-4 py-2">Spec 1</td>
                  <td className="border border-zinc-300 px-4 py-2">Description 1</td>
                </tr>
                <tr>
                  <td className="border border-zinc-300 px-4 py-2">Spec 2</td>
                  <td className="border border-zinc-300 px-4 py-2">Description 2</td>
                </tr>
                <tr>
                  <td className="border border-zinc-300 px-4 py-2">Spec 3</td>
                  <td className="border border-zinc-300 px-4 py-2">Description 3</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
  
        <div className="bg-zinc-900 text-zinc-300 min-h-screen flex flex-col items-center justify-center p-4">
          <div className="max-w-4xl w-full mb-8">
            <h2 className="text-3xl lg:text-5xl font-bold text-blue-400 mb-4">Frequently Asked Questions</h2>
            <div className="accordion">
              <button className="accordion-button">Question 1</button>
              <div className="accordion-content">Answer 1</div>
              <button className="accordion-button">Question 2</button>
              <div className="accordion-content">Answer 2</div>
              <button className="accordion-button">Question 3</button>
              <div className="accordion-content">Answer 3</div>
            </div>
          </div>
        </div>
  
        <footer className="bg-zinc-800 text-zinc-300 py-4">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <div>
              <p>Contact Us: contact@example.com</p>
              <div className="flex space-x-4 mt-2">
                <a href="#" className="text-blue-400">Privacy Policy</a>
                <a href="#" className="text-blue-400">Terms of Service</a>
              </div>
            </div>
            <div>
              <a href="#" className="text-blue-400">Facebook</a>
              <a href="#" className="text-blue-400 ml-4">Twitter</a>
            </div>
          </div>
        </footer>
      </>
    );
  }
  const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.post('/subscribe', (req, res) => {
  const { email } = req.body;

  // Basic email validation
  if (!email || !email.includes('@') || !email.includes('.')) {
    return res.status(400).json({ success: false, message: 'Invalid email address.' });
  }

  // Send welcome email
  sendWelcomeEmail(email)
    .then(() => {
      console.log(`Sent welcome email to ${email}`);
      res.status(200).json({ success: true, message: 'Welcome email sent successfully.' });
    })
    .catch(error => {
      console.error('Error sending welcome email:', error);
      res.status(500).json({ success: false, message: 'Failed to send welcome email.' });
    });
});




  