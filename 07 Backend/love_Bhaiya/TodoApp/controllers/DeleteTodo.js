const Todo = require('../models/Todo');

exports.DeleteTodo = async (req, res, next) => {
    try {
        const id = req.params.id;

        const todo = await Todo.findByIdAndDelete(id);

        if (!todo) {
            return res.status(404).json({
                success: false,
                message: "Todo not found",
            });
        }

        res.status(200).json({
            success: true,
            data: todo,
            message: 'Todo Deleted Successfully',
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
