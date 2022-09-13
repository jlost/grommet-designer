import {
  BarChart,
  Bold,
  Capacity,
  CheckboxSelected,
  Image,
  Navigate,
} from 'grommet-icons';

export const structure = [
  {
    name: 'Layout',
    Icon: Capacity,
    components: [
      'Box',
      'Grid',
      'Page',
      'PageContent',
      'PageHeader',
      'Main',
      'Nav',
      'Header',
      'Footer',
      'Sidebar',
      'Card',
      'CardHeader',
      'CardBody',
      'CardFooter',
      'Stack',
      'Layer',
    ],
  },
  {
    name: 'Typography',
    Icon: Bold,
    components: ['Heading', 'Paragraph', 'Text', 'Markdown'],
  },
  {
    name: 'Controls',
    Icon: Navigate,
    components: [
      'Accordion',
      'AccordionPanel',
      'Anchor',
      'Button',
      'DropButton',
      'Menu',
      'Tabs',
      'Tab',
      'Tip',
    ],
  },
  {
    name: 'Input',
    Icon: CheckboxSelected,
    components: [
      'CheckBox',
      'CheckBoxGroup',
      'DateInput',
      'FileInput',
      'Form',
      'FormField',
      'MaskedInput',
      'RadioButtonGroup',
      'RangeInput',
      'Select',
      'SelectMultiple',
      'TextArea',
      'TextInput',
    ],
  },
  {
    name: 'Visualizations',
    Icon: BarChart,
    components: [
      'Avatar',
      'Calendar',
      'Chart',
      'Clock',
      'DataChart',
      'DataTable',
      'Diagram',
      'Distribution',
      'List',
      'Meter',
      'NameValueList',
      'NameValuePair',
      'Notification',
      'Pagination',
      'Spinner',
      'Tag',
      'WorldMap',
    ],
  },
  {
    name: 'Media',
    Icon: Image,
    components: ['Carousel', 'Image', 'Video'],
  },
];
