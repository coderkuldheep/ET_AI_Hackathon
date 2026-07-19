import { useState } from "react";

import { createMachine } from "@/services/machineService";
import { uploadMachineImages } from "@/services/uploadService";

import ImageUploader from "@/components/machines/ImageUploader/ImageUploader";

export default function AddMachineModal({ onClose, reload }) {

    const [images, setImages] = useState([]);

    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({
        machineName: "",
        machineType: "",
        manufacturer: "",
        health: "Healthy",
        status: "Running"
    });

    const handleChange = (e) => {

        setForm({
            ...form,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            setLoading(true);

            let uploadedImages = [];

            if (images.length > 0) {

                const uploadResult = await uploadMachineImages(images);

                uploadedImages = uploadResult.files;

            }

            await createMachine({
                ...form,
                images: uploadedImages
            });

            reload();

            onClose();

        } catch (error) {

            console.error("Create Machine Error:", error);

            alert("Failed to create machine.");

        } finally {

            setLoading(false);

        }

    };

    return (

        <div className="modal">

            <form
                className="machine-form"
                onSubmit={handleSubmit}
            >

                <h2>Add Machine</h2>

                <input
                    type="text"
                    name="machineName"
                    placeholder="Machine Name"
                    value={form.machineName}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="machineType"
                    placeholder="Machine Type"
                    value={form.machineType}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="manufacturer"
                    placeholder="Manufacturer"
                    value={form.manufacturer}
                    onChange={handleChange}
                />

                <select
                    name="health"
                    value={form.health}
                    onChange={handleChange}
                >
                    <option value="Healthy">Healthy</option>
                    <option value="Warning">Warning</option>
                    <option value="Critical">Critical</option>
                </select>

                <select
                    name="status"
                    value={form.status}
                    onChange={handleChange}
                >
                    <option value="Running">Running</option>
                    <option value="Stopped">Stopped</option>
                    <option value="Maintenance">Maintenance</option>
                    <option value="Offline">Offline</option>
                </select>

                <ImageUploader
                    images={images}
                    setImages={setImages}
                />

                <div
                    style={{
                        display: "flex",
                        gap: "10px",
                        marginTop: "20px"
                    }}
                >

                    <button
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? "Saving..." : "Save"}
                    </button>

                    <button
                        type="button"
                        onClick={onClose}
                        disabled={loading}
                    >
                        Cancel
                    </button>

                </div>

            </form>

        </div>

    );

}