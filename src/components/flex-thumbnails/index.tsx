import {useState} from 'react';

import styles from './index.module.css';
export const FlexThumbnails = () => {
  const [value, setValue] = useState('100')

  return (
    <main>
    {value}
      <input 
        type="range" 
        min="20" 
        max="500" 
        value={value} 
        onChange={({target: {value}}) => setValue(value)}
      />
      <div className={styles.browser}>
      {new Array(3).fill(0).map((_, i) => (
        <div key={i} className={styles.group}>
          <div className={styles.thumbnailContainer}>
          {new Array(10).fill(0).map((_, i) => (
            <div style={{
              width: `${value}px`,
              height: `${value}px`,
            }} key={i} className={styles.thumbnail}>test</div>
          ))}
          </div>
        </div>
      ))}
      </div>
          

          </main>
  );
}
