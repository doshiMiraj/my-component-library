import {useState} from 'react';
import Button from './components/Button';
import './App.css';

function App() {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    console.log('Button clicked!');
  };

  const handleLoadingClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="app">
      <h1>Button Component Demo</h1>

      <section>
        <h2>Variants</h2>
        <div className='demo-group'>
          <Button variant='primary' onClick={handleClick}>Primary</Button>
          <Button variant='secondary' onClick={handleClick}>Secondary</Button>
          <Button variant='outline' onClick={handleClick}>Outline</Button>
          <Button variant='ghost' onClick={handleClick}>Ghost</Button>
          <Button variant='danger' onClick={handleClick}>Danger</Button>
        </div>
      </section>

      <section>
        <h2>Sizes</h2>
        <div className="demo-group">
          <Button size='small' onClick={handleClick}>Small</Button>
          <Button size='medium' onClick={handleClick}>Medium</Button>
          <Button size='large' onClick={handleClick}>Large</Button>
        </div>
      </section>

      <section>
        <h2>States</h2>
        <div className="demo-group">
          <Button disabled onClick={handleClick}>Disabled</Button>
          <Button loading={loading} onClick={handleLoadingClick}>{loading ? 'Loading...' : 'Click to Load'}</Button>
        </div>
      </section>

      <section>
        <h2>Full Width</h2>
        <Button fullWidth onClick={handleClick}>
          Full Width Button
        </Button>
      </section>

      <section>
        <h2>Combinations</h2>
        <div className="demo-group">
          <Button variant='primary' size='large' onClick={handleClick}>Large Primary</Button>
          <Button variant='danger' size='small' onClick={handleClick}>Small Danger</Button>
          <Button variant='outline' size='large' onClick={handleClick}>Large Outline</Button>
        </div>
      </section>
    </div>
  );
};

export default App;
