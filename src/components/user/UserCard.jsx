
const UserCard = ({ user }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto mt-8">
      <h2 className="text-xl font-semibold mb-4">{user.name}</h2>
      <p className="text-gray-600">{user.username}</p>
      <p className="text-gray-600">{user.email}</p>
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Address:</h3>
        <p className="text-gray-600">
          {user.address.street}, {user.address.suite}
        </p>
        <p className="text-gray-600">
          {user.address.city}, {user.address.zipcode}
        </p>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Geo Location:</h3>
        <p className="text-gray-600">
          Latitude: {user.address.geo.lat}, Longitude: {user.address.geo.lng}
        </p>
      </div>
      <p className="mt-4 text-gray-600">{user.phone}</p>
      <p className="text-gray-600">
        Website:{" "}
        <a href={`http://${user.website}`} className="text-blue-500">
          {user.website}
        </a>
      </p>
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Company:</h3>
        <p className="text-gray-600">{user.company.name}</p>
        <p className="text-gray-600">{user.company.catchPhrase}</p>
        <p className="text-gray-600">{user.company.bs}</p>
      </div>
    </div>
  );
};

export default UserCard;
