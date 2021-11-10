export default {
  title: 'Media', // 左袖の分類名 Media/〇〇 のように階層化も可能
  component: 'Media',
  argTypes: {
    content: {
      description: 'テキスト<br />空の場合は`タイトル`が表示される', // Descriptionに表示するテキスト
      control: {
        type: 'text', // number | range | array | object などがある
      },
      type: {
        name: 'string',
        required: true, // true時、Name部分のプロパティ右側に * が表示
      },
      defaultValue: 'テストテキスト', // 初期値
      table: {
        type: {
          summary: 'string', // Descriptionに表示される型注釈
        },
        defaultValue: {
          summary: 'タイトル', // Defaultに表示
        },
      },
    },
  },
}

export const Media = (_arg, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <Media :content="$props.content" />`,
})
