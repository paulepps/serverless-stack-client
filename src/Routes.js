import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import NewNote from "./containers/NewNote";
import Notes from "./containers/Notes";
import Settings from "./containers/Settings";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";
import ResetPassword from "./containers/ResetPassword";
import ChangePassword from "./containers/ChangePassword";
import ChangeEmail from "./containers/ChangeEmail";

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <UnauthenticatedRoute path="/login/reset">
                <ResetPassword />
            </UnauthenticatedRoute>
            <UnauthenticatedRoute path="/login">
                <Login />
            </UnauthenticatedRoute>
            <UnauthenticatedRoute path="/signup">
                <Signup />
            </UnauthenticatedRoute>
            <AuthenticatedRoute path="/notes/new">
                <NewNote />
            </AuthenticatedRoute>
            <AuthenticatedRoute path="/notes/:id">
                <Notes />
            </AuthenticatedRoute>
            <AuthenticatedRoute path="/settings/password">
                <ChangePassword />
            </AuthenticatedRoute>
            <AuthenticatedRoute path="/settings/email">
                <ChangeEmail />
            </AuthenticatedRoute>
            <AuthenticatedRoute path="/settings">
                <Settings />
            </AuthenticatedRoute>
            {/* Finally, catch all unmatched routes */}
            <Route>
                <NotFound />
            </Route>
        </Switch>
    );
}