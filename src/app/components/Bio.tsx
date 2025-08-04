import {FC} from "react";

type Props = {
    description?: string
};
const Bio:FC<Props> = (props) => {
    return (
        <div>
            <p className={"mt-4 text-lg text-gray-600 max-w-md text-center"}>
                {props.description}

            </p>

        </div>
    );
};
export default Bio;
