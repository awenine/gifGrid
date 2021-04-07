import React from "react";
import { render, screen } from "@testing-library/react";
import DisplayGrid from "./DisplayGrid";

test("renders 7 different GIFs from props", () => {
  render(
  <DisplayGrid gifInfo={[
    {
      id: '1',
      title: 'firstGIF'
    },
    {
      id: '2',
      title: 'secondGIF'
    },
    {
      id: '3',
      title: 'thirdGIF'
    },
    {
      id: '4',
      title: 'fourthGIF'
    },
    {
      id: '5',
      title: 'fifthGIF'
    },
    {
      id: '6',
      title: 'sixthGIF'
    },
    {
      id: '7',
      title: 'seventhGIF'
    },
  ]}/>
  );
  expect(screen.getByAltText(/firstGIF/i)).toBeInTheDocument();
  expect(screen.getByAltText(/secondGIF/i)).toBeInTheDocument();
  expect(screen.getByAltText(/thirdGIF/i)).toBeInTheDocument();
  expect(screen.getByAltText(/fourthGIF/i)).toBeInTheDocument();
  expect(screen.getByAltText(/fifthGIF/i)).toBeInTheDocument();
  expect(screen.getByAltText(/sixthGIF/i)).toBeInTheDocument();
  expect(screen.getByAltText(/seventhGIF/i)).toBeInTheDocument();
});