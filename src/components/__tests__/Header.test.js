import {render} from "@testing-library/react";
import Header from "../Header";
import{Provider} from "react-redux";
import store from "../../utils/store";
import {StaticRouter} from "react-router-dom/server";

test("Logo should load on rendering header", () => {
const header = render(
<StaticRouter>
    <Provider store = {store}>
        <Header/>
        </Provider>

</StaticRouter>
);
const logo =header.getAllByTestId("logo");
console.log(logo[0]);
expect(logo[0].in).toBe("http://localhost/dummy.png");

});


test("Online status should be green on rendering header", () => {
const header = render(
<StaticRouter>
    <Provider store = {store}>
        <Header/>
        </Provider>

</StaticRouter>
);
const logo =header.getAllByTestId("logo");
console.log(logo[0]);
expect(logo[0].in).toBe("http://localhost/dummy.png");

});
