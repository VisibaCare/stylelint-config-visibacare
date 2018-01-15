module.exports = {
	'order/properties-order': [
		[
			// Positions
			{
				properties: [
					'position',
					'top',
					'right',
					'bottom',
					'left',
					'display',
				],
			},
			// Display
			{
				order: 'flexible',
				properties: [
					'flex',
					'align-content',
					'align-items',
					'flex-basis',
					'flex-direction',
					'flex-flow',
					'flex-grow',
					'flex-shrink',
					'flex-wrap',
					'justify-content',
					'order',
					'grid',
					'grid-area',
					'grid-auto-columns',
					'grid-auto-flow',
					'grid-auto-rows',
					'grid-column',
					'grid-column-end',
					'grid-column-gap',
					'grid-column-start',
					'grid-gap',
					'grid-row',
					'grid-row-end',
					'grid-row-gap',
					'grid-row-start',
					'grid-template',
					'grid-template-areas',
					'grid-template-columns',
					'grid-template-rows',
				],
			},
			// Padding
			{
				properties: [
					'box-sizing',
					'padding',
					'padding-top',
					'padding-right',
					'padding-bottom',
					'padding-left',
				]
			},
			// Margin
			{
				properties: [
					'margin',
					'margin-top',
					'margin-right',
					'margin-bottom',
					'margin-left',
				]
			},
			// Border
			{
				properties: [
					'border',
					'border-top',
					'border-right',
					'border-bottom',
					'border-left',
				]
			},
			// Box
			{
				order: 'flexible',
				properties: [
					'height',
					'width',
					'max-height',
					'max-width',
					'min-height',
					'min-width',
				],
			},
			// Other
			{
				order: 'flexible',
				properties: [
					'content',
					'quotes',
					'z-index',
				],
			},
		],
		// Order plugin options
		{
			unspecified: 'ignore',
		},
	],
};
