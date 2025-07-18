const Todo = require('../models/Todo');

exports.updateTodo = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body;

        const todo = await Todo.findByIdAndUpdate(
            { _id: id },
            { title, description, updatedAt: Date.now() },
            { new: true }
        );

        res.status(200).json({
            success: true,
            data: todo,
            message: 'Update Successfully',
        });
    } catch (e) {
        console.error(e);
        res.status(500).json({
            success: false,
            data: "Internal server error",
            message: e.message,
        });
    }
};
