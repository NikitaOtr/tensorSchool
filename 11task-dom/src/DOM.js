/*
  В функцию appendToBody передаются 3 параметра:
  tag - имя тега, content - содержимое тега и count - количество вставок.
  Необходимо, чтобы функция осуществила вставку на страницу указанный тег с указанным содержимым указанное число раз.
  Считаем, что всегда передается тег, допускающий вставку текста в качестве своего содержимого (P, DIV, I и пр.).
*/
export function appendToBody(tag, content, count) {
    for (let i = 0; i < count; i++) {
        const element = document.createElement(tag);
        element.innerHTML = content;
        document.body.append(element);
    }
}

/*
  Создайте дерево вложенных тегов DIV.
  Каждый узел дерева должен содержать childrenCount узлов.
  Глубина дерева задается параметром level.
  Каждый элемент должен иметь класс вида item_n, где n - глубина вложенности элемента. (Нумерацию ведем с единицы).
  Сформированное дерево верните в качестве результата работы функции.
*/
export function generateTree(childrenCount, level) {
    const div = document.createElement('div');
    div.classList.add('item_1');
    creatTree(div, childrenCount, 2, level + 1);
    return div;
}

const creatTree = (elem, count, start, end) => {
    if (end - start <= 0) {
        return;
    }
    for (let i = 0; i < count; i++) {
        const div = document.createElement('div');
        div.classList.add('item_' + start);
        creatTree(div, count, start + 1, end);
        elem.append(div);
    }
};

/*
  Используйте функцию для создания дерева тегов DIV из предыдущего задания.
  Создайте дерево с вложенностью 3 и числом элементов в каждом узле 2.
  Далее замените все узлы второго уровня (т.е. имеющие класс item_2) на теги SECTION.
  Остальную структуру дерева сохраните неизменной, включая классы и те элементы,
  которые находились внутри переписанных тегов.
  Сформированное дерево верните в качестве результата работы функции.
*/
export function replaceNodes() {
    const className = 'item_2';
    const tree = generateTree(2, 3);
    const divItem_2 = tree.querySelectorAll(`.${className}`);
    for (let item of divItem_2) {
        const section = document.createElement('section');
        section.classList.add(className);
        section.innerHTML = item.innerHTML;
        item.before(section);
        item.remove();
    }
    return tree;
}
