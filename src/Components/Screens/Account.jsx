import { useEffect, useState } from "react";
import NavbarComponent from "../NavbarComponent";
import axios from "axios";

function Account() {
  const [user, setUser] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
 
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/users/7");
        setUser(response.data);  
        setLoading(false);  
      } catch (err) {
        setError("Failed to fetch user data.");
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);  

  if (loading) {
    return <div>Loading...</div>;  
  }

  if (error) {
    return <div>{error}</div>; 
  }

  return (
    <>
      <NavbarComponent />
      <div className="vh-100" style={{ backgroundColor: "#eee" }}>
        <div className="container py-5 h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-md-12 col-xl-8">
              <div className="card " style={{ borderRadius: "15px" }}>
                <div className="card-body text-center">
                  <div className="mt-3 mb-4">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                      alt="Profile"
                      className="rounded-circle img-fluid"
                      style={{ width: "100px" }}
                    />
                  </div>
                  <h4>
                    {user.name.firstname} {user.name.lastname}
                  </h4>
                  <p className="text-muted mb-4">
                    city: {user.address.city}
                    <span className="mx-2">|</span>{" "}
                    <a href="#!">street: {user.address.street}</a>
                  </p>

                  <button className="btn btn-primary rounded-pill btn-lg">
                    Update information
                  </button>
                  <div className="d-flex justify-content-between text-center mt-5 mb-2">
                    <div>
                      <p className="small text-muted mb-0">Phone number </p>
                      <h5 className="mb-1">{user.phone}</h5>
                    </div>
                    <div className="px-3">
                      <p className="small text-muted mb-0">Username</p>
                      <h5 className="mb-1">{user.username}</h5>
                    </div>
                    <div>
                      <p className="small text-muted mb-0">Email</p>
                      <h5 className="mb-1">{user.email}</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </>
  );
}

export default Account;
