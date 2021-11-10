export default {
  title: 'Media',
  component: 'MediaList',
  argTypes: {},
}

// exportすることでコンポーネントを登録
export const MediaList = (_arg, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <MediaList />`,
})
