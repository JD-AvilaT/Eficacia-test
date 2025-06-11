import { Meta, StoryFn } from '@storybook/angular';
import { MapCurrentPositionComponent } from '../../app/components/map-current-position/map-current-position.component';

export default {
  title: 'Components/Map/MapCurrentPosition',
  component: MapCurrentPositionComponent,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const Template: StoryFn<MapCurrentPositionComponent> = (args) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  initialZoom: 13,
};

export const CustomTileLayer = Template.bind({});
CustomTileLayer.args = {
  initialZoom: 15,
  tileLayerUrl: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  tileLayerAttribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
};