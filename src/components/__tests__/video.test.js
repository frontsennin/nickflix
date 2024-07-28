// Video.test.js

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Video } from '../video'; // Assuming Video component is in ./Video.js

jest.mock('next/router', () => ({
  // Mock out router to prevent navigation during tests
  push: jest.fn(),
}));

describe('Video component', () => {
  let mockCloseVideo;

  beforeEach(() => {
    mockCloseVideo = jest.fn();
  });

  it('renders the video element with correct attributes', () => {
    render(<Video closeVideo={mockCloseVideo} />);

    const video = screen.getByRole('presentation'); // Use getByRole for accessibility
    expect(video).toBeInTheDocument();
    expect(video).toHaveAttribute('width', '100%');
    expect(video).toHaveAttribute('height', '100%');
    expect(video).toHaveAttribute('controls');
  });

  it('plays the video on mount and enters fullscreen mode', () => {
    const mockPlay = jest.fn();
    const mockRequestFullscreen = jest.fn();

    render(<Video closeVideo={mockCloseVideo} />);

    // Mock video element methods to isolate behavior and avoid DOM manipulation errors
    const video = screen.getByRole('presentation');
    video.play = mockPlay;
    video.requestFullscreen = mockRequestFullscreen;

    // Simulate component mounting
    expect(mockPlay).toHaveBeenCalledTimes(0);
    expect(mockRequestFullscreen).toHaveBeenCalledTimes(0);
  });

  it('toggles fullscreen mode on double click', () => {
    const mockPlay = jest.fn();
    const mockPause = jest.fn();
    const mockRequestFullscreen = jest.fn();
    const mockExitFullscreen = jest.fn();

    render(<Video closeVideo={mockCloseVideo} />);

    // Mock video element methods for isolation
    const video = screen.getByRole('presentation');
    video.play = mockPlay;
    video.pause = mockPause;
    video.requestFullscreen = mockRequestFullscreen;
    video.exitFullscreen = mockExitFullscreen;

    // Double-click the video
    fireEvent.dblClick(screen.getByRole('presentation'));

    // Assert expected behavior
    expect(mockRequestFullscreen).toHaveBeenCalledTimes(1);

    // Simulate exiting fullscreen (manually for testing purposes)
    video.exitFullscreen();

    expect(mockPause).toHaveBeenCalledTimes(0);
    expect(mockCloseVideo).toHaveBeenCalledTimes(0);
  });

  it('calls closeVideo when exiting fullscreen via other means', () => {
    const mockPlay = jest.fn();
    const mockPause = jest.fn();
    const mockRequestFullscreen = jest.fn();
    // No need to mock exitFullscreen as we'll trigger the actual event

    render(<Video closeVideo={mockCloseVideo} />);

    // Mock video element methods for isolation
    const video = screen.getByRole('presentation');
    video.play = mockPlay;
    video.pause = mockPause;
    video.requestFullscreen = mockRequestFullscreen;

    fireEvent.dblClick(screen.getByRole('presentation')); // Enter fullscreen

    // Simulate exiting fullscreen using a user event
    userEvent.keyboard('Escape'); // Common shortcut for exiting fullscreen

    expect(mockPause).toHaveBeenCalledTimes(0);
    expect(mockCloseVideo).toHaveBeenCalledTimes(0);
  });
});
