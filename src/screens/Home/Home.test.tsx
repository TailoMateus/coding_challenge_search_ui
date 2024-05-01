import { render, screen } from "@testing-library/react";
import Home from "./Home";
import { CATEGORIES } from "../../constants"
import { TSearchResult } from '../../types'
import * as hooks from "../../hooks/useGetApi"

const mockSearchResult: TSearchResult[] = [{
  id: "91011",
  title: "Learn to Budget",
  url: "https://letmegooglethat.com/?q=Learn%20to%20Budget",
  description: "A playlist to learn budgeting",
  category: "PLAYLISTS"
}]

describe("Home component", () => {
  describe("Search results", () => {
    beforeEach(() => {
      jest.spyOn(hooks, "useGetApi").mockReturnValue({
        data: mockSearchResult, 
        isEmpty: false,
        isLoading: false,
        isError: false,
        fetchData: () => Promise.resolve()
      });
      render(<Home />)
    })

    it("should have mocked the title", async () => {
      expect(await screen.findByText(mockSearchResult[0].title)).toBeInTheDocument()
    });
  
    it("should have mocked the description", async () => {
      expect(await screen.findByText(mockSearchResult[0].description)).toBeInTheDocument()
    });
  
    it("should have mocked the category", async () => {
      expect(await screen.findByText(CATEGORIES[mockSearchResult[0].category])).toBeInTheDocument()
    });
  })

  describe("isLoading", () => {
    beforeEach(() => {
      jest.spyOn(hooks, "useGetApi").mockReturnValue({
        data: [], 
        isEmpty: false,
        isLoading: true,
        isError: false,
        fetchData: () => Promise.resolve()
      });
      render(<Home />)
    })

    it("should have show the Loading... message", async () => {
      expect(await screen.findByText('Loading...')).toBeInTheDocument()
    });
  })

  describe("No result", () => {
    beforeEach(() => {
      jest.spyOn(hooks, "useGetApi").mockReturnValue({
        data: [], 
        isEmpty: true,
        isLoading: false,
        isError: false,
        fetchData: () => Promise.resolve()
      });
      render(<Home />)
    })

    it("should have show the No results message", async () => {
      expect(await screen.findByText('There are no results matching your query.')).toBeInTheDocument()
    });
  })
});
