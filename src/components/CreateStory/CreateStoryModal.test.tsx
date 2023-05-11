import { render, screen } from "@testing-library/react";
import { CreateStoryModal } from "./CreateStoryModal";

describe("testing createStoryModal", () => {
  test(" createStory modal should present", () => {
    render(
      <CreateStoryModal
      setStoryModal={jest.fn()}
      storyModal={true}
      storyDetail={{
        title: "",
        description: ""
      }}
  setStoryDetail={jest.fn()}
  postStoryData={jest.fn()}
      
      />
    );

    const headingElement = screen.getByRole("heading", {
      name: /Create Story/i,
    });
    expect(headingElement).toBeInTheDocument();
  });
});
