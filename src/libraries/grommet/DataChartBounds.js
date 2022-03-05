import React from 'react';
import { Box, FormField, RadioButtonGroup, TextInput } from 'grommet';

const DataChartBounds = ({ value, onChange }) => {
  // temporary, until grommet fix
  const normalizeValue =
    (value && value.y && value.y[0] > value.y[1] && { y: value.y.reverse() }) ||
    value;
  return (
    <Box>
      <RadioButtonGroup
        direction="row"
        options={['align', 'y', 'undefined']}
        value={
          (value === 'align' && 'align') || (value?.y && 'y') || 'undefined'
        }
        gap="medium"
        onChange={({ target: { value: option } }) => {
          if (option === 'align') onChange('align');
          else if (option === 'y') onChange({ y: [0, 100] });
          else onChange(undefined);
        }}
      />
      {typeof value === 'object' && (
        <>
          <FormField label="max">
            <TextInput
              value={normalizeValue.y[1]}
              onChange={(event) => {
                const nextValue = JSON.parse(JSON.stringify(normalizeValue));
                nextValue.y[1] = parseInt(event.target.value, 10);
                onChange(nextValue);
              }}
            />
          </FormField>
          <FormField label="min">
            <TextInput
              value={normalizeValue.y[0]}
              onChange={(event) => {
                const nextValue = JSON.parse(JSON.stringify(normalizeValue));
                nextValue.y[0] = parseInt(event.target.value, 10);
                onChange(nextValue);
              }}
            />
          </FormField>
        </>
      )}
    </Box>
  );
};

export default DataChartBounds;
