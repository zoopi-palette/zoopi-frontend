import { ComponentMeta, ComponentStory } from '@storybook/react';
import { HospitalList } from './HospitalList';

const tempHospitals = [
  {
    id: 1,
    name: '신사동물병원',
    address: '서울 서초구 반포대로 45 명정빌딩',
  },
  {
    id: 2,
    name: '신사동물병원',
    address: '서울 서초구 반포대로 45 명정빌딩',
  },
  {
    id: 3,
    name: '신사동물병원',
    address: '서울 서초구 반포대로 45 명정빌딩',
  },
  {
    id: 4,
    name: '신사동물병원',
    address: '서울 서초구 반포대로 45 명정빌딩',
  },
  {
    id: 5,
    name: '신사동물병원',
    address: '서울 서초구 반포대로 45 명정빌딩',
  },
  {
    id: 6,
    name: '신사동물병원',
    address: '서울 서초구 반포대로 45 명정빌딩',
  },
  {
    id: 7,
    name: '신사동물병원',
    address: '서울 서초구 반포대로 45 명정빌딩',
  },
  {
    id: 8,
    name: '신사동물병원',
    address: '서울 서초구 반포대로 45 명정빌딩',
  },
  {
    id: 9,
    name: '신사동물병원',
    address: '서울 서초구 반포대로 45 명정빌딩',
  },
];

export default {
  title: 'atoms/HospitalList',
  component: HospitalList,
  argTypes: {},
  args: {
    hospitals: tempHospitals,
    height: '100%',
  },
} as ComponentMeta<typeof HospitalList>;

const Template: ComponentStory<typeof HospitalList> = (args) => (
  <HospitalList {...args} />
);

export const Default = Template.bind({});
