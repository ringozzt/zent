---
order: 8
zh-CN:
	title: 禁用选择
	index: 首页
	tree: 树
	title1: 杭州有赞科技有限公司
	title2: 技术
	title3: 后端
	title4: 运维
	title5: 前端
	title6: 产品

en-US:
	title: Disable select
	index: Index
	tree: Tree
	title1: Hangzhou Youzan Technology Co. Ltd
	title2: Engineer
	title3: Back End Engineer
	title4: Front End Engineer
	title5: Operations Engineer
	title6: Product

---

```jsx
import { Tree } from 'zent';

const disabledSelectedKeys = [2];

const treeData = [
	{
		id: 1,
		title: '{i18n.title1}',
		children: [
			{
				id: 2,
				title: '{i18n.title2}',
				children: [
					{
						id: 3,
						title: '{i18n.title3}',
					},
					{
						id: 4,
						title: '{i18n.title4}',
					},
					{
						id: 5,
						title: '{i18n.title5}',
					},
				],
			},
			{
				id: 6,
				title: '{i18n.title6}',
			},
		],
	},
];

ReactDOM.render(
	<div className="zent-demo-tree-disable-select-wrapper">
		<Tree
			selectable
			data={treeData}
			disabledSelectedKeys={disabledSelectedKeys}
		/>
		<Tree
			selectable
			data={treeData}
			disabledSelectedKeys={disabledSelectedKeys}
			disableSelectedStrictly={true}
		/>
	</div>,
	mountNode
);
```

<style>
	.zent-demo-tree-disable-select-wrapper {
		display: flex;
		justify-content: space-between;
	}
	.zent-demo-tree-disable-select-wrapper > ul {
		width: 45%;
	}
</style>
