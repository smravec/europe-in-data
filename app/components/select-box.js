'use client';

import { useState } from 'react';
import { Combobox, InputBase, useCombobox, ScrollArea} from '@mantine/core';
import CountryData from "../../country-data/country-data.json"

function getFilteredOptions(data, searchQuery) {
  const result = [];

  for (let i = 0; i < data.length; i += 1) {

    if (data[i].toLowerCase().includes(searchQuery.trim().toLowerCase())) {
      result.push(data[i]);
    }
  }

  return result;
}

export default function SelectBox( props ) {
  const SetCountry = props.SetCountry

  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [value, setValue] = useState(null);
  const [search, setSearch] = useState('');

  const filteredOptions = getFilteredOptions(Object.keys(CountryData), search);

  const options = filteredOptions.map((item) => (
    <Combobox.Option value={item} key={item}>
      {CountryData[item]["Icon"] + " " + item}
    </Combobox.Option>
  ));

  return (
    <Combobox
      store={combobox}
      withinPortal={false}
      onOptionSubmit={(val) => {
        setValue(val);
        setSearch(val);
        SetCountry(val)
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <InputBase
          rightSection={<Combobox.Chevron />}
          value={search}
          onChange={(event) => {
            combobox.openDropdown();
            combobox.updateSelectedOptionIndex();
            setSearch(event.currentTarget.value);
          }}
          onClick={() => combobox.openDropdown()}
          onFocus={() => combobox.openDropdown()}
          onBlur={() => {
            combobox.closeDropdown();
            setSearch(value || '');
          }}
          placeholder="Search Country"
          rightSectionPointerEvents="none"
        />
      </Combobox.Target>

      <Combobox.Dropdown>
        <ScrollArea h={185}>
          <Combobox.Options>
            {options.length > 0 ? options : <Combobox.Empty>Nothing found</Combobox.Empty>}
          </Combobox.Options>
        </ScrollArea>
      </Combobox.Dropdown>
    </Combobox>
  );
}