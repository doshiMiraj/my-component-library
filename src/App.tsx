import React, { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import Card from "./components/Card";
import Modal from "./components/Modal";
import "./App.css";

function App() {
  // Modal states
  const [basicModalOpen, setBasicModalOpen] = useState(false);
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);
  const [formModalOpen, setFormModalOpen] = useState(false);

  // Form states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Button loading state
  const [loading, setLoading] = useState(false);

  // Input validation
  const validateEmail = (value: string) => {
    if (!value) {
      setEmailError("Email is required");
      return false;
    }
    if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(value)) {
      setEmailError("Please enter a valid email");
      return false;
    }
    setEmailError("");
    return true;
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    if (formSubmitted) {
      validateEmail(value);
    }
  };

  const handleFormSubmit = () => {
    setFormSubmitted(true);
    const isValid = validateEmail(email);
    if (isValid && password) {
      alert(`Login successful! Email: ${email}`);
      setFormModalOpen(false);
      setEmail("");
      setPassword("");
      setFormSubmitted(false);
      setEmailError("");
    }
  };

  const handleLoadingDemo = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  const handleDelete = () => {
    alert("Item deleted successfully!");
    setConfirmModalOpen(false);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Component Library Demo</h1>
        <p className="subtitle">
          A showcase of Button, Input, Card, and Modal components
        </p>
      </header>

      {/* Button Component Section */}
      <section className="section">
        <h2 className="section-title">Button Component</h2>

        <Card variant="elevated">
          <Card.Header>Button Variants</Card.Header>
          <Card.Body>
            <div className="demo-group">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="danger">Danger</Button>
            </div>
          </Card.Body>
        </Card>

        <div className="grid-2">
          <Card variant="elevated">
            <Card.Header>Button Sizes</Card.Header>
            <Card.Body>
              <div className="demo-column">
                <Button size="small">Small Button</Button>
                <Button size="medium">Medium Button</Button>
                <Button size="large">Large Button</Button>
              </div>
            </Card.Body>
          </Card>

          <Card variant="elevated">
            <Card.Header>Button States</Card.Header>
            <Card.Body>
              <div className="demo-column">
                <Button disabled>Disabled</Button>
                <Button loading={loading} onClick={handleLoadingDemo}>
                  {loading ? "Loading..." : "Click to Load"}
                </Button>
                <Button fullWidth>Full Width</Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </section>

      {/* Input Component Section */}
      <section className="section">
        <h2 className="section-title">Input Component</h2>

        <div className="grid-2">
          <Card variant="elevated">
            <Card.Header>Input Variants</Card.Header>
            <Card.Body>
              <div className="demo-column">
                <Input
                  label="Name"
                  placeholder="Enter your name"
                  helperText="Your full name"
                />
                <Input
                  label="Email"
                  type="email"
                  placeholder="your@email.com"
                  status="success"
                  helperText="Looks good!"
                  defaultValue="user@example.com"
                />
                <Input
                  label="Password"
                  type="password"
                  placeholder="Enter password"
                  error="Password is required"
                />
              </div>
            </Card.Body>
          </Card>

          <Card variant="elevated">
            <Card.Header>Input Sizes & States</Card.Header>
            <Card.Body>
              <div className="demo-column">
                <Input size="small" placeholder="Small input" />
                <Input size="medium" placeholder="Medium input (default)" />
                <Input size="large" placeholder="Large input" />
                <Input
                  label="Required Field"
                  placeholder="This is required"
                  required
                />
              </div>
            </Card.Body>
          </Card>
        </div>
      </section>

      {/* Card Component Section */}
      <section className="section">
        <h2 className="section-title">Card Component</h2>

        <div className="grid-3">
          <Card variant="default">
            <Card.Header>Default Card</Card.Header>
            <Card.Body>A simple card with subtle border and shadow.</Card.Body>
          </Card>

          <Card variant="elevated">
            <Card.Header>Elevated Card</Card.Header>
            <Card.Body>
              An elevated card with prominent shadow for emphasis.
            </Card.Body>
          </Card>

          <Card variant="outlined">
            <Card.Header>Outlined Card</Card.Header>
            <Card.Body>A card with a bold border and no shadow.</Card.Body>
          </Card>
        </div>

        <div className="grid-2">
          <Card variant="elevated" hoverable>
            <Card.Header>Hoverable Card</Card.Header>
            <Card.Body>
              Hover over this card to see the lift effect. Perfect for creating
              interactive experiences.
            </Card.Body>
          </Card>

          <Card
            variant="elevated"
            clickable
            hoverable
            onClick={() => alert("Card clicked!")}
          >
            <Card.Header>Clickable Card</Card.Header>
            <Card.Body>
              This card is both clickable and hoverable. Click it to see an
              alert!
            </Card.Body>
          </Card>
        </div>

        <Card variant="elevated">
          <Card.Header>User Profile Example</Card.Header>
          <Card.Body>
            <div className="profile-content">
              <div className="avatar">JD</div>
              <div className="profile-info">
                <h3>John Doe</h3>
                <p className="role">Software Engineer</p>
                <p className="email">john.doe@example.com</p>
              </div>
            </div>
          </Card.Body>
          <Card.Footer>
            <Button size="small" variant="primary">
              View Profile
            </Button>
            <Button size="small" variant="ghost">
              Message
            </Button>
          </Card.Footer>
        </Card>
      </section>

      {/* Modal Component Section */}
      <section className="section">
        <h2 className="section-title">Modal Component</h2>

        <Card variant="elevated">
          <Card.Header>Modal Examples</Card.Header>
          <Card.Body>
            <div className="demo-group">
              <Button onClick={() => setBasicModalOpen(true)} variant="primary">
                Open Basic Modal
              </Button>
              <Button
                onClick={() => setConfirmModalOpen(true)}
                variant="danger"
              >
                Delete Confirmation
              </Button>
              <Button onClick={() => setFormModalOpen(true)} variant="outline">
                Login Form Modal
              </Button>
            </div>
          </Card.Body>
        </Card>
      </section>

      {/* Integrated Example */}
      <section className="section">
        <h2 className="section-title">Integrated Example</h2>

        <Card variant="elevated" padding="large">
          <Card.Header>Contact Form</Card.Header>
          <Card.Body>
            <div className="demo-column">
              <Input
                fullWidth
                label="Full Name"
                placeholder="Enter your full name"
                required
              />
              <Input
                fullWidth
                label="Email Address"
                type="email"
                placeholder="your@email.com"
                required
              />
              <Input
                fullWidth
                label="Message"
                placeholder="Your message here..."
                required
              />
            </div>
          </Card.Body>
          <Card.Footer>
            <Button variant="ghost">Cancel</Button>
            <Button variant="primary">Send Message</Button>
          </Card.Footer>
        </Card>
      </section>

      {/* Basic Modal */}
      <Modal isOpen={basicModalOpen} onClose={() => setBasicModalOpen(false)}>
        <Modal.Header>Welcome to Our App!</Modal.Header>
        <Modal.Body>
          <p>
            This is a basic modal dialog. You can close it by clicking the X
            button, clicking outside the modal, or pressing the Escape key.
          </p>
          <p style={{ marginTop: "1rem" }}>
            Modals are great for displaying important information, forms, or
            confirmations without navigating away from the current page.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setBasicModalOpen(false)}>
            Got it!
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Confirmation Modal */}
      <Modal
        isOpen={confirmModalOpen}
        onClose={() => setConfirmModalOpen(false)}
        size="small"
      >
        <Modal.Header>Confirm Delete</Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this item? This action cannot be
          undone.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="ghost" onClick={() => setConfirmModalOpen(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Form Modal */}
      <Modal
        isOpen={formModalOpen}
        onClose={() => {
          setFormModalOpen(false);
          setEmail("");
          setPassword("");
          setFormSubmitted(false);
          setEmailError("");
        }}
        size="medium"
      >
        <Modal.Header>Sign In to Your Account</Modal.Header>
        <Modal.Body>
          <div className="demo-column">
            <Input
              fullWidth
              label="Email"
              type="email"
              placeholder="your@email.com"
              required
              value={email}
              onChange={handleEmailChange}
              error={emailError}
              status={
                emailError
                  ? "error"
                  : email && !emailError
                    ? "success"
                    : "default"
              }
            />
            <Input
              fullWidth
              label="Password"
              type="password"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              helperText="Must be at least 8 characters"
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="ghost"
            onClick={() => {
              setFormModalOpen(false);
              setEmail("");
              setPassword("");
              setFormSubmitted(false);
              setEmailError("");
            }}
          >
            Cancel
          </Button>
          <Button variant="primary" onClick={handleFormSubmit}>
            Sign In
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
