const Notice = require('../models/Notice');

const getNotices = async (req, res) => {
    try {
        const notices = await Notice.find()
        res.status(200).json(notices)
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const addNotice = async (req, res) => {
    try {
        const { title, content } = req.body;

        if (!title || !content || !req.file) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const notice = await Notice.create({
            title,
            content,
            pdfUrl: req.file.path
        });

        res.status(201).json({
            message: "Notice created successfully",
            notice
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const getNoticesById = async (req, res) => {

    const id = req.params.id;
    try {
        const notice = await Notice.findById(id);
        res.status(200).json(notice);
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }

}

const deleteNotice = async (req, res) => {
    const { id } = req.params;

    try {
        const notice = await Notice.findById(id);

        if (notice.pdfUrl) {
            const publicId = notice.pdfUrl
                .split("/")
                .slice(-2)
                .join("/")
                .replace(".pdf", "");

            await cloudinary.uploader.destroy(publicId, {
                resource_type: "raw"
            });
        }

        await Notice.findByIdAndDelete(id);

        res.status(200).json({
            message: "Notice and PDF deleted successfully"
        });

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const updateNotice = async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;

    try {
        const updateData = { title, content };

        if (req.file) {
            updateData.pdfUrl = req.file.path;
        }

        const updatedNotice = await Notice.findByIdAndUpdate(
            id,
            updateData,
            { new: true }
        );

        res.status(200).json({
            message: "Notice updated successfully",
            notice: updatedNotice
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


module.exports = { getNotices, addNotice, getNoticesById, deleteNotice, updateNotice };