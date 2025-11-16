/* eslint-disable react/prop-types */
export default function UserProfile({ name, age }) {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg border">
      <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
      <p className="text-gray-600">Age: {age}</p>
    </div>
  );
}
