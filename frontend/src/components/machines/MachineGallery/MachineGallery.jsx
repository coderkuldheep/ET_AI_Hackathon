export default function MachineGallery({ machine }) {

    const images = machine.images || [];

    return (

        <div className="gallery-card">

            <h2>Machine Images</h2>

            {

                images.length > 0 ? (

                    <div className="gallery-grid">

                        {

                            images.map((image, index) => (

                                <img
                                    key={index}
                                    src={import.meta.env.VITE_API_URL + image}
                                    alt={`Machine ${index + 1}`}
                                    className="gallery-image"
                                />

                            ))

                        }

                    </div>

                ) : (

                    <div className="gallery-empty">

                        <img
                            src="/images/machine-placeholder.png"
                            alt="Machine"
                            className="gallery-image"
                        />

                        <p>No machine images uploaded.</p>

                    </div>

                )

            }

        </div>

    );

}