const Button = ({ label = "Default Button", color = "#fae9e4", onClick = () => alert("Botón clikeado!") }) => {
    return (
        <button style={{backgroundColor: color, color: "#a5503c", padding: "20px 20px", border: "none", borderRadius: "10px", cursor: "pointer"}} onClick={onClick}>
            {label}
        </button>
    );
};

export default Button