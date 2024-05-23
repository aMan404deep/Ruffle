const Account = () => {
    const userData = {
      username: 'example_user',
      email: 'user@example.com',
      orders: [
        { id: 1, date: '2024-04-30', total: 50.00 },
        { id: 2, date: '2024-04-28', total: 70.00 },
        { id: 3, date: '2024-04-25', total: 100.00 }
      ]
    };
  
    return (
        <div className="max-w-screen-md mx-auto p-6">
          <h1 className="text-2xl font-bold mb-6">My Account</h1>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">User Information</h2>
            <p><strong>Username:</strong> {userData.username}</p>
            <p><strong>Email:</strong> {userData.email}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Order History</h2>
            <table className="w-full">
              <thead>
                <tr>
                  <th className="py-1">Order ID</th>
                  <th className="py-1">Date</th>
                  <th className="py-1">Total</th>
                </tr>
              </thead>
              <tbody>
                {userData.orders.map(order => (
                  <tr key={order.id}>
                    <td className="py-2">{order.id}</td>
                    <td className="py-2">{order.date}</td>
                    <td className="py-2">${order.total.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    };
    
  
export default Account