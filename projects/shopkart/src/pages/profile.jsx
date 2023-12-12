import '../App.css'

const Profile = () => {
    return (
        <div className="container-fluid " style={{height:"100vh"}}>
            <div className="row h-100">
                <div className="col-md-3 bg-secondary"></div>
                <div className="col p-4">
                    <form className='w-100'>
                        <h4 className='m-2'>My Account</h4>
                        <div className="form-group">
                            <input className="form-control" type="text" placeholder='Full Name' />
                        </div>
                        <div className="form-group">
                            <input className="form-control" type="text" placeholder='Registered eamil' />
                        </div>
                        <div className="form-group">
                            <input className="form-control" type="text" placeholder='Contact' />
                        </div>
                        <div className="form-group">
                            <input className="form-control" type="text" placeholder='New password' />
                        </div>
                        <div className="form-group">
                              <textarea className="form-control" rows={10} type="text" placeholder="Your address"/>
                        </div>
                        <button className="btn btn-primary">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Profile;