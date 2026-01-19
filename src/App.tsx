import { useState } from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(false);

  const handleButtonClick = () => {
    console.log("Button clicked!");
  };

  const handleLoadingClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  const handleCardClick = () => {
    alert("Card clicked!");
  };

  return (
    <div className="app">
      <div>
        <h1>Button Component Demo</h1>

        <section>
          <h2>Variants</h2>
          <div className="demo-group">
            <Button variant="primary" onClick={handleButtonClick}>
              Primary
            </Button>
            <Button variant="secondary" onClick={handleButtonClick}>
              Secondary
            </Button>
            <Button variant="outline" onClick={handleButtonClick}>
              Outline
            </Button>
            <Button variant="ghost" onClick={handleButtonClick}>
              Ghost
            </Button>
            <Button variant="danger" onClick={handleButtonClick}>
              Danger
            </Button>
          </div>
        </section>

        <section>
          <h2>Sizes</h2>
          <div className="demo-group">
            <Button size="small" onClick={handleButtonClick}>
              Small
            </Button>
            <Button size="medium" onClick={handleButtonClick}>
              Medium
            </Button>
            <Button size="large" onClick={handleButtonClick}>
              Large
            </Button>
          </div>
        </section>

        <section>
          <h2>States</h2>
          <div className="demo-group">
            <Button disabled onClick={handleButtonClick}>
              Disabled
            </Button>
            <Button loading={loading} onClick={handleLoadingClick}>
              {loading ? "Loading..." : "Click to Load"}
            </Button>
          </div>
        </section>

        <section>
          <h2>Full Width</h2>
          <Button fullWidth onClick={handleButtonClick}>
            Full Width Button
          </Button>
        </section>

        <section>
          <h2>Combinations</h2>
          <div className="demo-group">
            <Button variant="primary" size="large" onClick={handleButtonClick}>
              Large Primary
            </Button>
            <Button variant="danger" size="small" onClick={handleButtonClick}>
              Small Danger
            </Button>
            <Button variant="outline" size="large" onClick={handleButtonClick}>
              Large Outline
            </Button>
          </div>
        </section>
      </div>

      <div>
        <h1>Card Component Subcomponents</h1>

        <section>
          <h2>Basic Card with Subcomponents</h2>
          <div className="demo-grid">
            <Card>
              <Card.Header>Card Title</Card.Header>
              <Card.Body>
                This is a basic card with a header and body. It uses the default
                variant and medium padding.
              </Card.Body>
            </Card>

            <Card>
              <Card.Header>Full Card</Card.Header>
              <Card.Body>
                This card includes all three sections: header, body, and footer.
                The footer can contain buttons or other actions.
              </Card.Body>
              <Card.Footer>
                <Button size="small" variant="primary">
                  Action
                </Button>
                <Button size="small" variant="outline">
                  Cancel
                </Button>
              </Card.Footer>
            </Card>
          </div>
        </section>
        <section>
          <h2>Variants</h2>
          <div className="demo-grid">
            <Card variant="default">
              <Card.Header>Default Card</Card.Header>
              <Card.Body>
                This card uses the default variant with a subtle border and
                minimal shadow.
              </Card.Body>
            </Card>

            <Card variant="elevated">
              <Card.Header>Elevated Card</Card.Header>
              <Card.Body>
                This card is elevated with a prominent shadow, creating depth
                and emphasis.
              </Card.Body>
            </Card>

            <Card variant="outlined">
              <Card.Header>Outlined Card</Card.Header>
              <Card.Body>
                This card has a prominent border with no shadow for a clean,
                flat look.
              </Card.Body>
            </Card>
          </div>
        </section>

        <section>
          <h2>Padding Options</h2>
          <div className="demo-grid">
            <Card padding="small">
              <Card.Header>Small Padding</Card.Header>
              <Card.Body>Compact card with minimal internal spacing.</Card.Body>
            </Card>

            <Card padding="medium">
              <Card.Header>Medium Padding</Card.Header>
              <Card.Body>Standard padding for most use cases.</Card.Body>
            </Card>

            <Card padding="large">
              <Card.Header>Large Padding</Card.Header>
              <Card.Body>
                Spacious card with generous internal spacing.
              </Card.Body>
            </Card>
          </div>
        </section>

        <section>
          <h2>Interactive Cards</h2>
          <div className="demo-grid">
            <Card hoverable variant="elevated">
              <Card.Header>Hoverable Card</Card.Header>
              <Card.Body>
                Hover over this card to see the lift effect. Great for creating
                visual feedback.
              </Card.Body>
            </Card>

            <Card
              clickable
              hoverable
              onClick={handleCardClick}
              variant="elevated"
            >
              <Card.Header>Clickable Card</Card.Header>
              <Card.Body>
                This card is both clickable and hoverable. Click it to trigger
                an action!
              </Card.Body>
            </Card>
          </div>
        </section>

        <section>
          <h2>Content Examples</h2>
          <div className="demo-grid">
            <Card variant="elevated">
              <Card.Header>User Profile</Card.Header>
              <Card.Body>
                <div className="profile-content">
                  <div className="avatar">JD</div>
                  <div>
                    <h3>John Doe</h3>
                    <p>Software Engineer</p>
                    <p className="text-muted">john.doe@example.com</p>
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

            <Card variant="elevated">
              <Card.Header>Product Card</Card.Header>
              <Card.Body>
                <h3 className="product-title">Premium Headphones</h3>
                <p className="product-price">$299.99</p>
                <p className="product-description">
                  High-quality wireless headphones with active noise
                  cancellation and 30-hour battery life.
                </p>
              </Card.Body>
              <Card.Footer>
                <Button size="small" variant="primary" fullWidth>
                  Add to Cart
                </Button>
              </Card.Footer>
            </Card>

            <Card variant="elevated">
              <Card.Header>Product Card</Card.Header>
              <Card.Body>
                <h3 className="product-title">Premium Headphones</h3>
                <p className="product-price">$299.99</p>
                <p className="product-description">
                  High-quality wireless headphones with active noise
                  cancellation and 30-hour battery life.
                </p>
              </Card.Body>
              <Card.Footer>
                <Button size="small" variant="primary" fullWidth>
                  Add to Cart
                </Button>
              </Card.Footer>
            </Card>

            <Card variant="outlined">
              <Card.Header>Statistics</Card.Header>
              <Card.Body>
                <div className="stats-grid">
                  <div className="stat-item">
                    <div className="stat-value">1,234</div>
                    <div className="stat-label">Users</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-value">567</div>
                    <div className="stat-label">Orders</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-value">89%</div>
                    <div className="stat-label">Satisfaction</div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </section>

        <section>
          <h2>Card without Subcomponents</h2>
          <Card variant="elevated" padding="large">
            <h3>Simple Card Content</h3>
            <p>
              You don't always need to use Header, Body, and Footer. You can put
              any content directly inside the Card component.
            </p>
          </Card>
        </section>
      </div>
    </div>
  );
}

export default App;
