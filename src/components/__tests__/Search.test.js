import {render} from "@testing-library/react";
import Body from "../Body";
import {Provider} from "react-redux";
import store from "../../utils/store.js";
import {StaticRouter} from "react-router-dom/server";
import {SOLAR_DATA} from "./data";
global.fetch = jest.fn(()=>{
 Promise.resolve({
    json:() => {Promise.resolve(SOLAR_DATA)},
        
 });
});
test(
    "Search Results on Homapage", () =>{
        const body = render (
            <StaticRouter>
                <Provider store={store}>
                    <Body/>
                </Provider>
            </StaticRouter>
        );
     const searchBtn = body.getByTestId("search-btn");
     console.log(searchBtn);
    }
);