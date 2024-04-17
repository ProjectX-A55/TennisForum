import { describe, expect, it } from "vitest";
import { fireEvent, getByTestId, render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import PostDetails from "../../../src/components/SinglePost/PostDetails";
import React from "react";
import AppContext from "../../../src/context/AppContext";

describe("PostDetails", () => {
    const context = {
        user: 'Test User',
        userData: "Test Data"
    };

    const mockPost = {
        id: '1',
        title: 'Test Title',
        content: 'Test Content',
        createdOn: '2022-01-01',
        liked: [],
        author: 'Test Author',
        tags: ["tag1", "tag2"],
        topic: 'Test Topic'
    };

    const mockTogglePostLike = (username) => {
        if (mockPost.liked.includes(username)) {
            mockPost.liked = mockPost.liked.filter(user => user !== username);
        } else {
            mockPost.liked.push(username);
        }
    };

    it("should render the post details", () => {
        render(
            <Router>
                <AppContext.Provider value={{ ...context }}>
                    <PostDetails post={mockPost} togglePostLike={mockTogglePostLike} />
                </AppContext.Provider>
            </Router>
        );
        expect(screen.getByText('Test Title')).toBeInTheDocument();
        expect(screen.getByText('Test Topic')).toBeInTheDocument();
        expect(screen.getByText('tag1')).toBeInTheDocument();
        expect(screen.getByText('tag2')).toBeInTheDocument();
    });

    it("should toggle the like status when the like button is clicked", () => {
        const mockSetContext = () => { };

        const { getByTestId } = render(
            <Router>
                <AppContext.Provider value={{ ...context, setContext: mockSetContext }}>
                    <PostDetails post={mockPost} togglePostLike={() => mockTogglePostLike(context.user)} />
                </AppContext.Provider>
            </Router>
        );

        let mockPostLikeLength = mockPost.liked.length;
        const likeButton = getByTestId('like-button');
        fireEvent.click(likeButton);
        expect(mockPost.liked.length).toBe(mockPostLikeLength + 1);
        fireEvent.click(likeButton);
        expect(mockPost.liked.length).toBe(mockPostLikeLength);
    });

});
