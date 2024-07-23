import Mock from 'mockjs';

// 模拟菜单数据
const menuData = Mock.mock({
    'menus|5-10': [{
        'id|+1': 1,
        'name': '@word',
        'link': '@url',
        'children|0-5': [{
            'id|+1': 100,
            'name': '@word',
            'link': '@url'
        }]
    }]
}).menus;

export function fetchMenuData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(menuData);
        }, 1000);
    });
}

// 模拟产品数据
const products = Mock.mock({
    'items|10': [{
        'id|+1': 1,
        'name': '@name',
        'price|10-100.2': 1,
        'description': '@sentence(5, 10)'
    }]
}).items;

export function fetchProduct(id) {
    return new Promise((resolve) => {
        const product = products.find(product => product.id === Number(id));
        setTimeout(() => {
            resolve(product || null);
        }, 1000);
    });
}
