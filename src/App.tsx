import React, { FC } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import "./App.css";
import { ProposalDetailsPage, ProposalListPage } from "./proposals";

const App: FC =
    () => (
        <BrowserRouter>
            <div className="App">
                <main className="App_content">
                    <Switch>
                        <Route path="/proposals/:proposalId">
                            {() => (
                                <ProposalDetailsPage talkId={"123"}/>
                            )}
                        </Route>
                        <Route path="/proposals">
                            {() => (
                                <ProposalListPage/>
                            )}
                        </Route>
                        <Redirect to="/proposals"/>
                    </Switch>
                </main>
            </div>
        </BrowserRouter>
    );

export default App;



