import React, {useState, useEffect} from "react";
import axios from "axios";

// Fungsi Menampilkan List Publishers
const Publisher = () =>{
    const [publishers, setPublishers] = useState([]);

    const getPublishers = async () => {
       try{
            const publishers = await axios({
                method: "get",
                url :"http://localhost:3000/publishers",
            });
            setPublishers(publishers.data);
       } catch (err) {
        console.log(err);
       } 
    };
    

    useEffect(() => {
        getPublishers();
    }, []);

    // Fungsi Remove 

    const deleteHandler = async (id) => {
        //sending
        await axios.delete(`http://localhost:3000/publishers/remove/${id}`);

        //panggil fungsi
        deleteHandler();
    }

    //Fungsi Detail

    return(
        <>
            <h1 className ="text-center my-4">Dashboards Publisher</h1>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-12 col-sm-12">
            <table className="table table-bordered table-striped table-hover">
                <thead className="shadow-sm">
                    <tr>
                        <th>Id</th>
                        <th>Avatar</th>
                        <th>Name</th>
                        <th>Comic</th>
                        <th>Total Comic</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className="shadow-sm">
                    {publishers.map((publisher) => {
                        const{id, name, address, avatar} = publisher;
                        return(
                            <tr>
                                <td>{id}</td>
                                <td>
                                <img src={avatar} className="avatar-author pt-3 d-flex justify-content-center ml-3" alt="image"/>
                                </td>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <div className="">
                                          
                                            <h5 className="pt-8 text-center">{name}</h5>
                                            <span className="badge bg-success">{address}</span>
                                        </div>
                                    </div>
                                </td>
                                <td> - </td>
                                <td>{
                                
                                }</td>
                                <td>
                                    <button onClick={() => deleteHandler(+id)} className="btn btn-danger mt-8">Delete</button>
                                </td>
                             </tr>
                        );
                    })}
                </tbody>
            </table>

                    </div>

                </div>
            </div>
        </>
    );
};

export default Publisher;
