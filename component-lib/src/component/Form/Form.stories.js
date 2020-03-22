import React from "react";
import { storiesOf } from "@storybook/react";

import Form from "./Form";
import "./Form.css";

storiesOf("Forms", module)
  .add("Form small", () => (
    <Form label="Email" placeholder="Email" type="form-small" />
  ))
  .add("Form medium", () => (
    <Form label="Email" placeholder="Email" type="form-medium" />
  ))
  .add("Form large", () => (
    <Form label="Email" placeholder="Email" type="form-large" />
  ))