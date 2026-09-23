import resume from "../assets/documents/Elizabeth_Kushelevsky_Resume__1_.pdf"

export const Resume = () => {
    return (
        <div style={{ position: "fixed", inset: 0 }}>
            <iframe src={resume} title="Résumé"
                    style={{ width: "100%", height: "100%", border: "none", display: "block" }} />
        </div>
    );
  };