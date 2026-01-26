import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);

    return (
        <div>
            <h1>Oops!!</h1>
            <h1>Something went wrong</h1>
            <p>{err?.statusText || err?.message}</p>
        </div>
    );
};

export default Error;
