import { describe, expect, it } from "vitest";
import {  render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import userEvent from '@testing-library/user-event';
import PostDetails from "../../../src/components/SinglePost/PostDetails";
import React from "react";
import AppContext from "../../../src/context/AppContext";
import '@testing-library/jest-dom'

describe("PostDetails", () => {

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

    const context = {
        user: 'Test User',
        userData: {
            username: mockPost.author,
            isAdmin: false,
            isBlocked: false
        }
    };

    const mockTogglePostLike = (username) => {
        if (mockPost.liked.includes(username)) {
            mockPost.liked = mockPost.liked.filter(user => user !== username);
        } else {
            mockPost.liked.push(username);
        }
    };

    const user = userEvent.setup();

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

    it("should toggle the like status when the like button is clicked", async () => {
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
        await user.click(likeButton);
        expect(mockPost.liked.length).toBe(mockPostLikeLength + 1);
        await user.click(likeButton);
        expect(mockPost.liked.length).toBe(mockPostLikeLength);
    });

    it("handleEdit toggles isEditing state", async () => {
        const mockSetContext = () => { };

        const { getByTestId } = render(
            <Router>
                <AppContext.Provider value={{ ...context, setContext: mockSetContext }}>
                    <PostDetails post={mockPost} togglePostLike={() => mockTogglePostLike(context.user)} />
                </AppContext.Provider>
            </Router>
        );

        const editButton = getByTestId('edit-button');
        expect(editButton).toHaveTextContent('Edit');
        await user.click(editButton);
        expect(editButton).toHaveTextContent('Save');
    });


    it("check if the user is blocked", () => {
        const mockSetContext = () => { };

        const context = {
            user: 'Test User',
            userData: {
                username: mockPost.author,
                isAdmin: false,
                isBlocked: true
            }
        };

        const { getByText } = render(
            <Router>
                <AppContext.Provider value={{ ...context, setContext: mockSetContext }}>
                    <PostDetails post={mockPost} togglePostLike={() => mockTogglePostLike(context.user)} />
                </AppContext.Provider>
            </Router>
        );

        expect(getByText(/you are banned/i)).toBeInTheDocument();

    });

});