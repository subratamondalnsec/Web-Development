import { useState } from "react";

function CommentsForm() {
    let [formData, setFormData] = useState({
        username: "",
        remarks: "",
        rating: 5
    });

    let handleInputChange = (event) => {
        setFormData((currData) => ({
            ...currData,
            [event.target.name]: event.target.value
        }));
    };

    let handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission first
        console.log(formData);
        setFormData({
            username: "",
            remarks: "",
            rating: 5
        });
    };

    return (
        <div>
            <h2>Give a Comment</h2>
            <form onSubmit={handleSubmit}> {/* Fixed from 'from' to 'form' */}
                <label htmlFor="username">Username: </label>
                <input
                    placeholder="Username"
                    type="text"
                    value={formData.username}
                    id="username"
                    onChange={handleInputChange}
                    name="username"
                />
                <br /><br />

                <label htmlFor="remarks">Add a remark: </label>
                <textarea
                    value={formData.remarks}
                    placeholder="Add a remark"
                    onChange={handleInputChange}
                    id="remarks"
                    name="remarks"
                />
                <br /><br />

                <label htmlFor="rating">Rate: </label>
                <input
                    placeholder="Rating"
                    type="number"
                    min={1}
                    max={5}
                    value={formData.rating}
                    id="rating"
                    onChange={handleInputChange}
                    name="rating"
                />
                <br />
                <button type="submit">Add Comment</button>
            </form>
        </div>
    );
}

export default CommentsForm;
