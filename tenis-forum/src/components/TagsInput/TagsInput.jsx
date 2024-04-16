import ReactSelect from "react-select";
import PropTypes from 'prop-types';

const options = [
    { value: 'Players', label: 'Players' },
    { value: 'Tournaments', label: 'Tournaments' },
    { value: 'Techniques', label: 'Techniques' },
    { value: 'Gear', label: 'Gear' },
    { value: 'Matches', label: 'Matches' },
    { value: 'Strategy', label: 'Strategy' },
    { value: 'Training', label: 'Training' },
    { value: 'Fitness', label: 'Fitness' },
    { value: 'News', label: 'News' },
    { value: 'Discussion', label: 'Discussion' },
    { value: 'Tips', label: 'Tips' },
    { value: 'Equipment', label: 'Equipment' },
    { value: 'Coaching', label: 'Coaching' },
    { value: 'Events', label: 'Events' },
    { value: 'Community', label: 'Community' },
];

const themeColor1 = getComputedStyle(document.documentElement).getPropertyValue('--theme-color-1');
const themeColor2 = getComputedStyle(document.documentElement).getPropertyValue('--theme-color-2');


/**
 * Maps the given tags to their corresponding options.
 *
 * @param {Array} tags - The tags to map.
 * @returns {Array} The corresponding options.
 */
export const mapTags = (tags) => {
    return options.filter((option) => tags.includes(option.label));
}

/**
 * A component for selecting tags.
 *
 * @component
 * @param {Object} props - The props.
 * @param {Function} props.updateTags - The function to call when the selected tags change.
 * @param {Array} [props.alreadySelectedTags=[]] - The tags that are already selected.
 * @returns {React.Element} The rendered component.
 */
const TagsInput = ({ updateTags, alreadySelectedTags = [] }) => {
    return (
        <>
            <label htmlFor="input-tags">Tags</label>
            <ReactSelect
                isMulti
                options={options}
                value={alreadySelectedTags}
                onChange={updateTags}
                styles={{
                    control: (provided) => ({ ...provided, backgroundColor: themeColor1, color: themeColor2 }),
                    option: (provided) => ({ ...provided, backgroundColor: themeColor1, color: themeColor2 }),
                    multiValue: (provided) => ({ ...provided, backgroundColor: themeColor1, color: themeColor2 }),
                    multiValueLabel: (provided) => ({ ...provided, color: themeColor2 }),
                    multiValueRemove: (provided) => ({ ...provided, color: themeColor2 }),
                }}
            />
        </>
    )
}

TagsInput.propTypes = {
    updateTags: PropTypes.func,
    alreadySelectedTags: PropTypes.array
}

export default TagsInput
