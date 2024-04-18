/**
 * Loading component for the application.
 *
 * This component displays a loading spinner in the center of the screen.
 *
 * @component
 * @example
* @returns {JSX.Element} - A JSX element representing the loading component.
 */
const Loading = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <span className="loading loading-dots loading-lg"></span>
        </div>
    );
}

export default Loading;
