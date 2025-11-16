export default function UserProfile({ name, age }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
      <h2 style={{ color: 'black' }}>{name}</h2>
      <p style={{ color: 'gray' }}>Age: {age}</p>
    </div>
  );
}
