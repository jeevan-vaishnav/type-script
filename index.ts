//Const assertion
function layout(setting: {
    align: 'left' | 'center' | 'right',
    padding: number
}) {
    console.log('Performing layout:', setting)
}

const example = {
    align: 'left' as const,
    padding: 0
}

layout(example)