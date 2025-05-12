// React Component: A single Die rendered as a functional component
export default function Die(props) {

    // React JSX Syntax: Dynamic inline styling based on `isHeld` prop
    // Conditional rendering for visual feedback when dice are held
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white" // If held, show green background; else white
    }

    return (
        <button 
            style={styles} // JSX style object applied here
            onClick={() => props.hold(props.id)} // React Event Handler: Calls parent function to toggle 'held' state
            aria-pressed={props.isHeld} // Accessibility: Communicates held status to screen readers
            aria-label={`Die with value ${props.value}, 
            ${props.isHeld ? "held" : "not held"}`} // Accessibility: Describes die state
        >
            {props.value} {/* JSX rendering of die value */}
        </button>
    )
}
