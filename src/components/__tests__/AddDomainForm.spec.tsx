import { describe, expect, it } from "vitest";
import { render } from "@solidjs/testing-library";
import { AddDomainForm } from "../AddDomainForm";

describe("AddDomainForm", () => {
  it("should render", async () => {
    const { findByText } = render(() => <AddDomainForm />);
    expect(await findByText("Add a domain:")).toBeInTheDocument();
  });
});
