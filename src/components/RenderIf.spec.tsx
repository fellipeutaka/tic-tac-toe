import { render } from "@testing-library/react";

import { RenderIf } from "./RenderIf";

describe("<RenderIf />", () => {
  it("should render a component if condition is true", () => {
    const text = "I'm supposed to be rendered";
    const { queryByText } = render(
      <RenderIf condition={1 + 1 === 2}>
        <p>{text}</p>
      </RenderIf>
    );

    expect(queryByText(text)).toBeInTheDocument();
  });

  it("should not render a component if condition is false", () => {
    const text = "I'm not supposed to be rendered";
    const { queryByText } = render(
      <RenderIf condition={1 + 1 === 3}>
        <p>{text}</p>
      </RenderIf>
    );

    expect(queryByText(text)).not.toBeInTheDocument();
  });
});
