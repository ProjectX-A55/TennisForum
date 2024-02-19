import ReactSelect from "react-select";

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


export const mapTags = (tags) => {
   return options.filter((option) => tags.includes(option.label));
}

const TagsInput = ({ updateTags, alreadySelectedTags = [] }) => {
    return (
    <><label htmlFor="input-tags">Tags</label>
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

export default TagsInput