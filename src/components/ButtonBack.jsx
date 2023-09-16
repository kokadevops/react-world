import { useNavigate } from "react-router-dom";
import Button from "./Button";

const ButtonBack = () => {
    const navigate = useNavigate();

    return (
        <Button
            type="back"
            onClick={(e) => {
                e.preventDefault();
                navigate(-1);
            }}
        >
            back
        </Button>
    );
};
export default ButtonBack;
