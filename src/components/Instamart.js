import { useState } from "react";

const Section = ({ title, description }) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div className="border border-black p-2 m-2">
            <h3 className="font-bold text-xl">{title}</h3>

            <button
                onClick={() => setIsVisible(!isVisible)}
                className="cursor-pointer underline"
            >
                {isVisible ? "Hide" : "Show"}
            </button>

            {isVisible && <p>{description}</p>}
        </div>
    );
};

const Instamart = () => {
    const [visibleSection, setVisibleSection] = useState(
        "team"
    );

    return (
        <div>
            <h1 className="text-2xl font-bold m-2">Instamart</h1>

            <Section
                title={"About"}
                description="Instamart is a fast delivery service."
                isVisible={visibleSection === "About"}
                setIsVisible={() =>
                    setSectionConfig({
                        showAbout: true,
                        showTeam: false,
                        //showCareers: false,
                    })
                }

            />

            <Section
                title={"Team"}
                description="We have a world-class delivery team."
                isVisible={visibleSection === "Team"}
                setIsVisible={() =>
                    setSectionConfig({
                        showAbout: false,
                        showTeam: true,
                        //showCareers: false,
                    })
                }
            />
        </div>
    );
};

export default Instamart;
